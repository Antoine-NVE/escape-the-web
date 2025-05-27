import { chromium } from 'playwright';

const SECRET_COMBO = [3, 6, 2, 7];
const SECRET_WORD = 'ombre';
const COLOR_SEQUENCE = ['red', 'blue', 'green'];

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('⏳ Ouverture de la page...');
    await page.goto('http://localhost:5173');

    // === Écran d’accueil ===
    await page.getByRole('button', { name: /commencer/i }).click();

    // === Puzzle 1 : Molettes ===
    console.log('🔐 Puzzle 1...');
    const buttonsUp = await page.locator('button:has-text("▲")').all();
    const digits = await page.locator('.font-mono').all();

    for (let i = 0; i < 4; i++) {
        const current = parseInt((await digits[i].textContent()) || '0');
        const clicks = (SECRET_COMBO[i] - current + 10) % 10;
        for (let j = 0; j < clicks; j++) {
            await buttonsUp[i].click();
        }
    }

    await page.getByRole('button', { name: /valider/i }).click();
    await page.waitForSelector('text=coffre déverrouillé', { timeout: 2000 });
    await page.waitForTimeout(1000); // petite pause

    // === Puzzle 2 : lettres ===
    console.log('🔤 Puzzle 2...');
    for (const letter of SECRET_WORD) {
        await page.keyboard.press(letter);
        await page.waitForTimeout(200);
    }

    await page.waitForSelector('text=mot est complet', { timeout: 2000 });
    await page.waitForTimeout(1000);

    // === Puzzle 3 : couleurs ===
    console.log('🎨 Puzzle 3...');
    await page.getByRole('button', { name: /voir la séquence/i }).click();
    await page.waitForTimeout(3500); // le temps de lecture de la séquence

    const buttons = await page.locator('button[style*="background-color"]');
    const count = await buttons.count();
    const colorMap = {};

    for (let i = 0; i < count; i++) {
        const style = await buttons.nth(i).getAttribute('style');
        if (!style) continue;
        if (style.includes('red')) colorMap['red'] = i;
        if (style.includes('blue')) colorMap['blue'] = i;
        if (style.includes('green')) colorMap['green'] = i;
        if (style.includes('yellow')) colorMap['yellow'] = i;
    }

    for (const color of COLOR_SEQUENCE) {
        await buttons.nth(colorMap[color]).click();
        await page.waitForTimeout(300);
    }

    await page.getByRole('button', { name: /valider/i }).click();
    await page.waitForSelector('text=bravo', { timeout: 2000 });

    console.log('🎉 Test E2E terminé avec succès !');
    await browser.close();
})();

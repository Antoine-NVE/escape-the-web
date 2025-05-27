# Escape the Web

Projet de mini-jeu en React avec 3 puzzles interactifs, développé par **Antoine Navette**.

---

## 🚀 Lancer le projet

Assurez-vous d'avoir Node.js installé.

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur en développement :

```bash
npm run dev
```

3. Accéder au jeu dans votre navigateur :

```
http://localhost:5173
```

---

## 📆 Scripts disponibles

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "test": "vitest",
  "format": "prettier --write .",
  "e2e": "node tests/playwright/e2e.js"
}
```

| Commande          | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Lance le serveur Vite                    |
| `npm run build`   | Compile le projet pour la production     |
| `npm run lint`    | Analyse le code avec ESLint              |
| `npm run preview` | Lance un serveur de prévisualisation     |
| `npm run test`    | Lance les tests unitaires avec Vitest    |
| `npm run format`  | Formate le code avec Prettier            |
| `npm run e2e`     | Lance le script `e2e.js` avec Playwright |

---

## 🧠 Solutions des puzzles

### 🔐 Puzzle 1 : Le coffre à molettes

> Code à entrer via les molettes :
> **`3 6 2 7`**

### 🌤️ Puzzle 2 : Le mot à reconstituer

> Mot à deviner lettre par lettre :
> **`ombre`**

### 🎨 Puzzle 3 : La séquence de couleurs

> Ordre à cliquer après affichage de la séquence :
> **`rouge → bleu → vert`**

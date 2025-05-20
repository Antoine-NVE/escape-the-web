const StartScreen = ({ onStart }: { onStart: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-gray-800 px-4 max-w-2xl mx-auto">
            <div className="w-full bg-white shadow-xl rounded-2xl p-10 space-y-6 border border-gray-200">
                <h1 className="text-4xl font-extrabold text-center">🧠 Escape The Web</h1>
                <p className="text-lg text-center">
                    Résous des énigmes pour t'échapper du piège numérique. Saura-tu t’en sortir ?
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={onStart}
                        className="px-6 py-3 bg-rose-400 text-white font-semibold rounded-xl shadow-md hover:bg-rose-500 transition-all duration-300 cursor-pointer"
                    >
                        Commencer le jeu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;

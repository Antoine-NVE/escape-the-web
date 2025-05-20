const SuccessScreen = ({ onRestart }: { onRestart: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-gray-800 px-4 max-w-2xl mx-auto">
            <div className="w-full bg-white shadow-xl rounded-2xl p-10 space-y-6 border border-gray-200 text-center">
                <h1 className="text-4xl font-extrabold text-green-600">🎉 Bravo !</h1>
                <p className="text-lg">Tu as résolu toutes les énigmes. Tu peux être fier de toi !</p>
                <p className="text-sm text-gray-500">Tu peux maintenant revenir à la réalité... ou recommencer ?</p>
                <button
                    onClick={onRestart}
                    className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 cursor-pointer"
                >
                    Rejouer
                </button>
            </div>
        </div>
    );
};

export default SuccessScreen;

export function Card({ title, genre, tech, descriptionText, participationList = [], gameImage, gameAlt, link }) {
    const IMGSOURCE = `https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/${gameImage}`;

    return (
        <div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between max-w-sm">
            <div>
                {/* Header */}
                <div class="p-6 pb-4">
                    <h1 class="text-2xl font-bold tracking-wider text-white uppercase">{title}</h1>
                    <div class="text-sm text-gray-400 mt-1 space-x-2">
                        <span>{genre}</span>
                        <span>•</span>
                        <span>{tech}</span>
                    </div>
                </div>

                {/* Imagen */}
                <img src={IMGSOURCE} alt={gameAlt} class="w-full h-48 object-cover" />

                {/* Contenido */}
                <div class="p-6 space-y-6">
                    <p class="text-gray-300 text-sm leading-relaxed">
                        {descriptionText}
                    </p>

                    <div class="space-y-2">
                        <h2 class="text-xs font-semibold tracking-widest text-teal-400 uppercase">MY ROLE</h2>
                        {Array.isArray(participationList) ? (
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                {participationList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p class="text-sm text-gray-300">{participationList}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Botón Play */}
            <div class="p-6 pt-0">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="block w-full text-center bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-teal-500/20"
                >
                    PLAY GAME
                </a>
            </div>
        </div>
    );
}
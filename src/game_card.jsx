export function Card({ title, genre, tech, descriptionText, participationList = [], gameImage, gameAlt, link, githubLink, roleTitle = "KEY SYSTEMS DEVELOPED" }) {
    const IMGSOURCE = `https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/${gameImage}`;

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between max-w-sm">
            <div>
                {/* Header */}
                <div className="p-6 pb-4">
                    <h1 className="text-2xl font-bold tracking-wider text-white uppercase">{title}</h1>
                    <div className="text-sm text-gray-400 mt-1 space-x-2">
                        <span>{tech}</span>
                        <span>•</span>
                        <span>{genre}</span>
                    </div>
                </div>

                {/* Imagen */}
                <img src={IMGSOURCE} alt={gameAlt} className="w-full h-48 object-cover" />

                {/* Contenido */}
                <div className="p-6 space-y-6">
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {descriptionText}
                    </p>

                    <div className="space-y-2">
                        <h2 className="text-xs font-semibold tracking-widest text-teal-400 uppercase">{roleTitle}</h2>
                        {Array.isArray(participationList) ? (
                            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                {participationList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-300">{participationList}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0 flex items-center gap-3">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${githubLink ? "flex-1" : "w-full"} text-center bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-3 px-3 rounded-xl transition duration-300 shadow-lg hover:shadow-teal-500/20 text-sm flex items-center justify-center gap-2`}
                >
                    PLAY GAME
                </a>
                {githubLink && (
                    <a 
                        href={githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700 hover:border-gray-600 font-semibold py-3 px-3 rounded-xl transition duration-300 shadow-lg text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GITHUB</span>
                    </a>
                )}
            </div>
        </div>
    );
}

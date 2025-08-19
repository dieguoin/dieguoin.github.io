export function Card({title , descriptionText, participationText, gameImage, gameAlt, link}){
    const IMGSOURCE = `https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/${gameImage}`
    return(
        <a href={link} target="_blank" class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/30 transition duration-300">
            <img src={IMGSOURCE} alt={gameAlt} class="w-full h-48 object-cover" />
            <div class="p-5 space-y-2">
                <h1 class="text-xl font-semibold text-teal-300">{title}</h1>
                <h2 class="text-md text-blue-300"><span class="font-semibold">Description</span></h2>
                <p class="text-sm text-gray-300">{descriptionText}</p>
                <h2 class="text-md text-blue-300"><span class="font-semibold">My role:</span></h2>
                <p class="text-sm text-gray-300">{participationText}</p>
            </div>
        </a>
    )
}
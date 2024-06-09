export function Card({title , descriptionText, participationText, gameImage, gameAlt, link}){
    const IMGSOURCE = `https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/${gameImage}`
    return(
        <a href={link} target="_blank" className = "card">
            <img src={IMGSOURCE} alt={gameAlt} />
            <h1>{title}</h1>
            <h2>Description</h2>
            <p>{descriptionText}</p>
            <h2>My work</h2>
            <p>{participationText}</p>
        </a>
    )
}
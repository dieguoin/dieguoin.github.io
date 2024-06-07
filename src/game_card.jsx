export function Card({title , descriptionText, participationText, gameImage, gameAlt, link}){
    const IMGSOURCE = `https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/${gameImage}`
    return(
        <div className = "card">
            <img src={IMGSOURCE} alt={gameAlt} />
            <h1>{title}</h1>
            <h2>Descripción</h2>
            <p>{descriptionText}</p>
            <h2>Aportación</h2>
            <p>{participationText}</p>
            <h2>Enlace</h2>
            <a href={link}>{title}</a>
        </div>
    )
}
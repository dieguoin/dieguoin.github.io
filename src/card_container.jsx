import {Card} from "./game_card.jsx"

export function Container(){
    return(

        <div className="container">
            <Card title="Last Grove" 
                descriptionText="Last Grove es un juego hecho por estudiantes universitarios, con varios artistas, varios programadores y 1 músico." 
                participationText="Mi principal aportación, puesto que es un proyecto propio, ha sido como programador de todo el juego." 
                gameImage="LastGrove.png" gameAlt="game image"
                link="https://grimgreeneyes.itch.io/last-grove"></Card>
            <Card title="Archer`s  Defense" 
                descriptionText="Archer Defense es un juego con las bases creadas como proyecto de universidad y mejorado a lo largo del tiempo, sin embargo, aun le queda un largo camino para estar terminado.
                El proyecto es propio y se han conseguido los assets de la tienda o de compañeros de universidad." 
                participationText="Mi principal aportación, puesto que es un proyecto propio, ha sido como programador de todo el juego." 
                gameImage="ArcherDefense.png" gameAlt="game image"
                link="https://www.oculus.com/experiences/quest/5715868665115254/?ranking_trace=109698451666589_5715868665115254_SKYLINEWEB_705f96cc-fa6e-4b20-a36b-ef01b748d1f0&utm_source=www.google.com&utm_medium=oculusredirect"></Card>
            <Card title="Lost Fragments" 
                descriptionText="Lost fragments es un juego creado para la GameGen Game Jam, Una Game Jam con el tema de ''Faltan partes''."
                participationText="Mi principal aportación en este juego ha sido como desarrollador de las mecánicas base de el personaje y del inventario." 
                gameImage="RobbotIcon.png" gameAlt="game image"
                link="https://dieguoin.itch.io/lost-fragments"></Card>
            
        </div>
    )
}
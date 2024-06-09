import {Card} from "./game_card.jsx"

export function Container(){
    return(

        <div className="container">
            <Card title="Last Grove" 
                descriptionText="Last Grove is a videogame created by  team of college students, with a gruop of artists, programers and 1 musician." 
                participationText="What I´ve done is as the main programer in the whole combat sistem."
                gameImage="LastGrove.png" gameAlt="game image"
                link="https://grimgreeneyes.itch.io/last-grove"></Card>
            <Card title="Archer`s  Defense" 
                descriptionText="Archer´s defense is a game created as a college proyect and upgraded affter that, it`s still in developent, as I`m doing it as a hobby.
                It´s my own project and the assets are from the asset store." 
                participationText="What I`ve done, as it is my own proyect, is the hole game programing and design." 
                gameImage="ArcherDefense.png" gameAlt="game image"
                link="https://www.oculus.com/experiences/quest/5715868665115254/?ranking_trace=109698451666589_5715868665115254_SKYLINEWEB_705f96cc-fa6e-4b20-a36b-ef01b748d1f0&utm_source=www.google.com&utm_medium=oculusredirect"></Card>
            <Card title="Lost Fragments" 
                descriptionText="Lost fragments is a videogame created for GameGen Game Jam, a Game Jam with the main theme ''missing parts''."
                participationText="What I´ve done is as the main developer for the mechanics and inventory." 
                gameImage="RobbotIcon.png" gameAlt="game image"
                link="https://dieguoin.itch.io/lost-fragments"></Card>
            
        </div>
    )
}
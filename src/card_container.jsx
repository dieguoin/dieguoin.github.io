import {Card} from "./game_card.jsx"

export function Container(){
    return(

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card title="Last Grove" 
                descriptionText="Last Grove is a videogame created by  team of college students, with a gruop of artists, programers and 1 musician." 
                participationText="I served as the lead programmer responsible for the entire combat system."
                gameImage="LastGrove.png" gameAlt="game image"
                link="https://grimgreeneyes.itch.io/last-grove"
                participationList={["Turn-based loop" ,
                    "Grid & Pathfinding" ,
                    "Tactical AI",
                    "Abilities & Area of Effect",
                    "Combat Rules, Stats & Logic System"]}
                ></Card>
            
            <Card title="Archer`s  Defense" 
                descriptionText="Archer´s defense is a game created as a college proyect and upgraded affter that, it`s still in developent, as I`m doing it as a hobby.
                It´s my own project and the assets are from the asset store." 
                participationText="As this is my own project, I was fully responsible for both the game programming and the overall design." 
                gameImage="ArcherDefense.png" gameAlt="game image"
                link="https://www.oculus.com/experiences/quest/5715868665115254/?ranking_trace=109698451666589_5715868665115254_SKYLINEWEB_705f96cc-fa6e-4b20-a36b-ef01b748d1f0&utm_source=www.google.com&utm_medium=oculusredirect"
                participationList={["Immersive Interaction & Spatial UX Design" ,
                    "VR Mechanics & 6DOF Input Programming" ,
                    "Performance Optimization & Frame Rate Control",
                    "Spatial Level Design & 1:1 Scale Proportions",
                    "Solo VR Project Management & Full-Stack Development"]}
                ></Card>
            
            <Card title="Lost Fragments" 
                descriptionText="Lost fragments is a videogame created for GameGen Game Jam, a Game Jam with the main theme ''missing parts''."
                participationText="I worked as the main developer for core gameplay mechanics and the inventory system, including user interface implementation." 
                gameImage="RobbotIcon.png" gameAlt="game image"
                link="https://dieguoin.itch.io/lost-fragments"
                participationList={["Core gameplay mechanics" ,
                    "Inventory system" ,
                    "User interface implementation",
                    "Main developer",
                    "Integración UI/Gameplay"]}
                ></Card>
            
        </div>
    )
}
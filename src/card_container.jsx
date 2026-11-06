import { Card } from "./game_card.jsx";

export function Container() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card
                title="Last Grove"
                tech="Unity / C#"
                genre="Turn-Based Strategy"
                descriptionText="Tactical turn-based game developed by a multidisciplinary team. Built modular combat rules, tactical decision-making systems, and navigation grids."
                gameImage="LastGrove.png"
                gameAlt="Last Grove game screenshot"
                link="https://grimgreeneyes.itch.io/last-grove"
                roleTitle="KEY SYSTEMS DEVELOPED"
                participationList={[
                    "Turn-based execution loop & state machine",
                    "Grid navigation & custom pathfinding",
                    "Tactical enemy AI decision systems",
                    "Abilities, Area of Effect (AoE) & stats logic"
                ]}
            />

            <Card
                title="Archer's Defense"
                tech="Meta Quest / OpenXR"
                genre="VR Action"
                descriptionText="Solo VR defense experience published on Meta Quest App Lab. Focused on physics-based projectile mechanics, 6DoF hand tracking, and rock-solid framerate optimization."
                gameImage="ArcherDefense.png"
                gameAlt="Archer's Defense game screenshot"
                link="https://www.oculus.com/experiences/quest/5715868665115254/?ranking_trace=109698451666589_5715868665115254_SKYLINEWEB_705f96cc-fa6e-4b20-a36b-ef01b748d1f0&utm_source=www.google.com&utm_medium=oculusredirect"
                roleTitle="KEY SYSTEMS DEVELOPED"
                participationList={[
                    "6DoF archery interaction & physics-driven arrows",
                    "Spatial UX & room-scale calibration",
                    "Framerate optimization & draw-call reduction for mobile VR",
                    "Wave spawning & continuous performance budgeting"
                ]}
            />

            <Card
                title="Lost Fragments"
                tech="Unity / C#"
                genre="Game Jam Project"
                descriptionText="Short narrative adventure created for GameGen Game Jam under the theme 'Missing Parts'. Fast-paced development prioritizing modular inventory and interaction architecture."
                gameImage="RobbotIcon.png"
                gameAlt="Lost Fragments game screenshot"
                link="https://dieguoin.itch.io/lost-fragments"
                roleTitle="KEY SYSTEMS DEVELOPED"
                participationList={[
                    "Core gameplay loop & player controller",
                    "Modular inventory and item socketing system",
                    "Event-driven UI and gameplay integration",
                    "Rapid prototyping under a strict game jam deadline"
                ]}
            />
        </div>
    );
}

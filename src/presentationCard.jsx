export function PresentationCard() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
                <img
                    src="https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/Diego.jpeg"
                    alt="Diego Nicolás Barreales"
                    className="w-56 h-56 object-cover rounded-2xl shadow-lg border border-gray-700"
                />
            </div>

            <div className="space-y-5">

                <h2 className="text-2xl font-semibold text-teal-300">
                    About Me
                </h2>

                <p>
                    I'm Diego Nicolás Barreales, a Video Game Design and
                    Development graduate from Universidad Rey Juan Carlos.
                </p>

                <p>
                    I'm primarily focused on gameplay programming and
                    interactive experiences, with experience developing
                    projects using Unity, C# and Virtual Reality technologies.
                </p>

                <p>
                    I've worked on gameplay mechanics, interactive systems,
                    user interfaces and modular game systems. I've also worked
                    with OpenXR and Meta Quest for VR development.
                </p>

                <p>
                    I'm currently expanding my experience with Unreal Engine
                    and C++, developing a new project and learning more about
                    Unreal's gameplay architecture and tools.
                </p>

                <p>
                    I'm looking for opportunities as a Junior Game Developer,
                    Gameplay Programmer, Unity Developer or VR Developer.
                </p>

            </div>
        </div>
    );
}
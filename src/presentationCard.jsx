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
                    I&apos;m Diego Nicolás Barreales, a Video Game Design and
                    Development graduate from Universidad Rey Juan Carlos.
                </p>

                <p>
                    I specialize in gameplay programming and interactive experiences,
                    with a proven foundation in developing projects using Unity, C#,
                    and Virtual Reality technologies.
                </p>

                <p>
                    My work spans gameplay mechanics, interactive systems, user
                    interfaces, and modular architectures, alongside VR development
                    using OpenXR and Meta Quest.
                </p>

                <p>
                    I am currently expanding my skill set with Unreal Engine and C++,
                    developing a new project while exploring Unreal&apos;s gameplay
                    framework and tooling.
                </p>

                <p>
                    I am actively seeking opportunities as a Gameplay Programmer,
                    Unity Developer, or VR/XR Developer.
                </p>

            </div>
        </div>
    );
}

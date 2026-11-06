export function Experience() {
    return (
        <section
            id="experience"
            className="max-w-5xl mx-auto px-6 py-24"
        >
            <p className="text-teal-400 font-medium mb-3">
                EXPERIENCE
            </p>

            <h2 className="text-4xl font-bold mb-10">
                Professional Experience
            </h2>

            <div className="border-l border-gray-700 pl-6 space-y-12">

                <div>
                    <h3 className="text-xl font-semibold">
                        TREE GAMES STUDIOS
                    </h3>

                    <p className="text-teal-400 mt-1">
                        Video Game Developer – RTS · 2026 – Present
                    </p>

                    <ul className="mt-5 space-y-3 text-gray-400">
                        <li>
                            • Development of unit systems, multi-selection, grouping, AI detection, movement, formations, and combat for an RTS.
                        </li>

                        <li>
                            • Integration and optimization of GPU Instancer Pro (GPUI), Crowd Animations, and instancing/pooling systems for large crowds.
                        </li>

                        <li>
                            • Creation of shaders, material variations, and GPU materials for visual customization.
                        </li>

                        <li>
                            • Integration of Pathfinding and FollowerEntity systems, along with attack behaviors against units and structures.
                        </li>

                        <li>
                            • Performance profiling and debugging (gameplay, animation, rendering, and UI in Unity/C#).
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">
                        JDEROBOT
                    </h3>

                    <p className="text-teal-400 mt-1">
                        Intern · January 2024 – May 2024
                    </p>

                    <ul className="mt-5 space-y-3 text-gray-400">
                        <li>
                            • Developed automated tests using Selenium and Python.
                        </li>

                        <li>
                            • Created dashboards and data tables using Dash.
                        </li>

                        <li>
                            • Worked in a multidisciplinary technical environment.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

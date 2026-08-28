import { ImageGrid } from "./imageGrid";
import { PresentationCard } from "./presentationCard";

export function AboutMe() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">

            <div className="text-center mb-16">
                <p className="text-teal-400 font-medium mb-3">
                    GAME DEVELOPER
                </p>

                <h1 className="text-5xl md:text-6xl font-bold">
                    Diego Nicolás Barreales
                </h1>

                <p className="mt-5 text-xl text-gray-400">
                    Junior Game Developer · Gameplay Programmer · VR Developer
                </p>

                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        Unity
                    </span>

                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        Unreal Engine
                    </span>

                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        C#
                    </span>

                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        C++
                    </span>

                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                        VR
                    </span>
                </div>
            </div>

            <PresentationCard />

        </section>
    );
}
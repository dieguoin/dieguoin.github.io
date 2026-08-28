import { Container } from './card_container.jsx';

export function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-900 py-24"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="max-w-2xl mb-14">
                    <p className="text-teal-400 font-medium mb-3">
                        MY WORK
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Game Projects
                    </h2>

                    <p className="mt-5 text-gray-400 text-lg">
                        A selection of games and interactive experiences
                        developed throughout my studies and personal projects.
                    </p>
                </div>

                <Container />

            </div>
        </section>
    );
}
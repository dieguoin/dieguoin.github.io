import { ImageGrid } from "./imageGrid";
import { PresentationCard } from "./presentationCard";

export function AboutMe(){
    return(
    <div class="max-w-5xl mx-auto px-6 py-16">
        <h1 class="text-4xl font-bold text-teal-400 text-center mb-12">About Me</h1>
            <PresentationCard/>
            <p class="mt-12 text-center text-lg">I have experience with several programming languages and technologies:</p>
            <ImageGrid/>
        </div>
    )
}
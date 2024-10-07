import { ImageGrid } from "./imageGrid";
import { PresentationCard } from "./presentationCard";

export function AboutMe(){
    return(
        <div>
            <h1>About me</h1>
            <PresentationCard/>
            <p>I have knowledge in some programing languages and technologies. Which I`m best are:</p>
            <ImageGrid/>
        </div>
    )
}
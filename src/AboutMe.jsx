import { ImageGrid } from "./imageGrid";
import { PresentationCard } from "./presentationCard";

export function AboutMe(){
    return(
        <div>
            <h1>Sobre mi</h1>
            <PresentationCard/>
            <p>Tengo conocimientos sobre varias tecnologías y lenguajes de programación. Entre los que mejor domino se encuentran:</p>
            <ImageGrid/>
        </div>
    )
}
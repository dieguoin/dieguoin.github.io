import { Projects } from './Projects.jsx'
import { AboutMe } from './AboutMe.jsx'
import { Contact } from './Contact.jsx'
import { Header } from './Header.jsx'

export function App(){
    return(
        <div>
            
            <AboutMe/>
            <Projects/>
            <Contact/>
        </div>
    )
}
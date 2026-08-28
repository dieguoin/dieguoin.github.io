import { Header } from './Header.jsx'
import { AboutMe } from './AboutMe.jsx'
import { Projects } from './Projects.jsx'
import { Contact } from './Contact.jsx'
import { Experience } from './Experience.jsx'

export function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <Header />

            <main>
                <AboutMe />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    )
}
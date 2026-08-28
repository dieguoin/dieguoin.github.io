import { NavBar } from './nav_bar.jsx'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/80 bg-gray-950/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo / Nombre del Portafolio */}
                <a href="#" className="text-xl font-bold tracking-wider text-white hover:text-teal-400 transition-colors">
                    DIEGUOIN
                </a>

                {/* Navegación */}
                <NavBar />
            </div>
        </header>
    )
}
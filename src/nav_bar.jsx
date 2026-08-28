import { NavComponent } from "./nav_component.jsx";

export function NavBar() {
    return (
        <nav aria-label="Navegación principal">
            <ul className="flex items-center space-x-6 sm:space-x-8">
                <li>
                    <NavComponent Name="About" />
                </li>
                <li>
                    <NavComponent Name="Projects" />
                </li>
                <li>
                    <NavComponent Name="Contact" />
                </li>
            </ul>
        </nav>
    )
}
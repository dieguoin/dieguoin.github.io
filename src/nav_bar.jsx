import { NavComponent } from "./nav_component.jsx";

export function NavBar(){
    return(
        <div className="navigationBar">
            <ul>
                <li><NavComponent Name="About"/></li>
                <li><NavComponent Name="projects"/></li>
                <li><NavComponent Name="contact"/></li>
            </ul>
        </div>
    )
}
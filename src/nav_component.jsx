export function NavComponent({Name}){
    return(
        <div className="nav_component">
            <a href="/">
                <div>    
                    <p>{Name}</p>
                </div>
            </a>
        </div>
    )
}
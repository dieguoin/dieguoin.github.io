export function NavComponent({ Name }) {
    // Genera el ID de ancla en minúsculas (ej: "About" -> "#about")
    const targetId = `#${Name.toLowerCase()}`;

    return (
        <a 
            href={targetId}
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200 capitalize"
        >
            {Name}
        </a>
    );
}
export function Contact() {
    return (
        <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold text-teal-400 mb-8">Contact</h1>
            <p className="mb-6">You can contact me via email or LinkedIn:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                    href="mailto:diego.nicolasbarreales@gmail.com" 
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-500 transition"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4213/4213980.png"
                        alt="Email icon"
                        className="w-6 h-6"
                    />
                    diego.nicolasbarreales@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/diego-nicol%C3%A1s-barreales-9b4206261/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-500 transition"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn icon"
                        className="w-6 h-6"
                    />
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

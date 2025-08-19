export function PresentationCard(){
    return(
    <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div class="flex-shrink-0">
            <img src="https://raw.githubusercontent.com/dieguoin/dieguoin.github.io/main/src/assets/Diego.jpeg" 
                alt="Diego Nicolás Barreales" 
                class="w-52 h-52 object-cover rounded-2xl shadow-lg border border-gray-700"/>
        </div>
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-teal-300">Diego Nicolás Barreales</h2>
            <p>Hi, I’m Diego Nicolás Barreales, a Video Game Design and Development graduate at Universidad Rey Juan Carlos. </p>
            <p>Since I was young, I’ve been passionate about video games, and now I have the opportunity to create them myself. Throughout my studies and personal projects, I’ve gained hands-on experience in programming, game mechanics, and design, with a special interest in Virtual Reality.</p>
            <p>I’m eager to apply and further develop my skills in a professional environment. I enjoy working in collaborative teams using agile methodologies, tackling challenges creatively, and asking for feedback when needed. I also value self-assessment, as I believe recognizing and correcting mistakes is an essential part of growth.</p>
            <p>My main professional goal is to contribute to the future of immersive experiences through Virtual Reality development.</p>
        </div>
    </div>
        
    )
}
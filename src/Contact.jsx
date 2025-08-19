export function Contact(){
    return(
    <section class="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 class="text-4xl font-bold text-teal-400 mb-8">Contact</h1>
        <p class="mb-6">You can contact me via mail or LinkedIn:</p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
      <a href="mailto:diego.nicolasbarreales@gmail.com" 
         class="flex items-center gap-2 text-teal-300 hover:text-teal-500 transition">
        <img src="https://cdn-icons-png.flaticon.com/512/4213/4213980.png" class="w-6 h-6"/>
        diego.nicolasbarreales@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/diego-nicol%C3%A1s-barreales-9b4206261/" target="_blank" 
         class="flex items-center gap-2 text-teal-300 hover:text-teal-500 transition">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" class="w-6 h-6"/>
        LinkedIn
      </a>
    </div>
  </section>
    )
}
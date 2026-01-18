import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Efeito de luz sutil - Ajustado para não vazar no mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-primary/10 rounded-full blur-[80px] md:blur-[150px] animate-pulse-slow -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl z-10 w-full"
      >
        <p className="text-base md:text-lg text-primary font-mono mb-4">
          &lt;Olá, eu sou o Lohan /&gt;
        </p>
        
        {/* Ajuste de tamanho da fonte: menor no mobile (4xl), gigante no desktop (8xl) */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          Desenvolvedor <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
            Fullstack
          </span>
        </h1>

        <p className="text-base md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto px-2">
          Construindo experiências digitais com <strong className="text-white">Java & Spring Boot</strong> no backend e <strong className="text-white">React</strong> no frontend.
        </p>

        {/* Botões empilham no mobile (flex-col) e ficam lado a lado no desktop (md:flex-row) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(90, 103, 216, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
          >
            Ver Projetos <ArrowDown size={20} />
          </motion.button>
          
          <motion.a
            href="https://linkedin.com/in/lohan-macedo/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Linkedin size={20} /> LinkedIn
          </motion.a>
        </div>
      </motion.div>

      {/* Ícone de scroll escondido em telas muito pequenas para não poluir */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-slate-500 hidden sm:block"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Luz de fundo para o rodapé - Ajustada para não vazar lateralmente */}
      {/* Luz de fundo com máscara de suavização para não cortar no rodapé */}
<div 
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] -z-10 pointer-events-none"
  style={{
    background: "radial-gradient(circle at center bottom, rgba(90, 103, 216, 0.2), transparent 70%)",
    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
  }}
/>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 text-center relative overflow-hidden"
        >
          {/* Decoração sutil de fundo */}
          <div className="absolute top-0 right-0 p-10 opacity-5 hidden md:block">
            <Mail size={120} className="text-white rotate-12" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Vamos construir algo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              incrível juntos?
            </span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novas oportunidades e projetos desafiadores. 
            Se você busca um desenvolvedor focado em soluções robustas e performance, vamos conversar!
          </p>

          {/* Botões: Empilhados no mobile, lado a lado no desktop */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
            <motion.a
              href="mailto:lohan4256@gmail.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 group"
            >
              <Mail size={20} className="group-hover:animate-bounce" /> 
              <span>Mandar E-mail</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lohan-macedo/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Linkedin size={20} /> <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/LohanMM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Github size={20} /> <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
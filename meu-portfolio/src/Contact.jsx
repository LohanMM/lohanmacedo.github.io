import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Luz de fundo para o rodapé */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-[3rem] border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Vamos construir algo <span className="text-primary">incrível?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Estou disponível para novas oportunidades e projetos desafiadores. 
            Se você busca um desenvolvedor focado em soluções robustas e performance, vamos conversar!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:lohan4256@gmail.com" // AJUSTE SEU EMAIL AQUI
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20"
            >
              <Mail size={20} /> E-mail
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lohan-macedo/" // AJUSTE SEU LINK AQUI
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} /> LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/LohanMM" // AJUSTE SEU LINK AQUI
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              <Github size={20} /> GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
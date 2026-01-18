import { Github, ExternalLink, Code, Layers, ShieldCheck, Zap, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GestorFlex ERP",
    tagline: "Sua solução completa de gestão empresarial",
    description: "Sistema Fullstack para PDV, controle de estoque e dashboard analítico. Desenvolvido com uma arquitetura robusta e segurança JWT.",
    tech: ["Java 21", "Spring Boot 3", "React 18", "MySQL", "JWT", "Docker"],
    github: "https://github.com/LohanMM/gestorflex",
    demo: "#", 
    image: "/Projeto Dashboard.png", 
    features: [
      { icon: <ShieldCheck size={18} />, text: "Autenticação Segura JWT" },
      { icon: <Layers size={18} />, text: "Arquitetura Modular" },
      { icon: <Zap size={18} />, text: "Dashboard em Tempo Real" },
      { icon: <Code size={18} />, text: "APIs RESTful Eficientes" },
    ]
  },
  {
    title: "Agenda Fácil Barber",
    tagline: "Agendamentos inteligentes para barbearias",
    description: "Aplicação dinâmica que automatiza a agenda de profissionais, com integração direta ao Google Calendar para sincronização de horários em tempo real.",
    tech: ["Node.js", "JavaScript", "Express", "Google API", "OAuth2", "Tailwind"],
    github: "https://github.com/seu-usuario/agenda-facil", 
    demo: "https://agendafacilbarber.com/belezapura",
    image: "/Agenda Fácil.png",
    features: [
      { icon: <Calendar size={18} />, text: "Google Calendar API" },
      { icon: <Clock size={18} />, text: "Sincronização em Tempo Real" },
      { icon: <ShieldCheck size={18} />, text: "Autenticação OAuth2" },
      { icon: <Zap size={18} />, text: "Interface Ultrarrápida" },
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-effect rounded-[2.5rem] p-5 md:p-8 group flex flex-col h-full border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* IMAGEM COM LINK */}
              <a 
                href={project.demo !== "#" ? project.demo : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-52 md:h-72 w-full rounded-[1.8rem] overflow-hidden mb-8 block group/img shadow-2xl"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Layers size={60} className="text-slate-600" />
                  </div>
                )}
                {/* Overlay de hover na imagem */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform translate-y-4 group-hover/img:translate-y-0 transition-transform">
                      <ExternalLink className="text-white" size={24} />
                   </div>
                </div>
              </a>

              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">{project.tagline}</p>
                
                <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6 line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] md:text-xs font-bold rounded-lg border border-white/10 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Grid de Features - Ajustado para mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8 border-t border-white/5 pt-6 mt-auto">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-400 text-xs md:text-sm">
                      <span className="text-primary">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-4 bg-white/5 text-white rounded-2xl flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-all font-bold text-sm"
                  >
                    <Github size={18} /> Código
                  </motion.a>
                  
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 font-bold text-sm"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
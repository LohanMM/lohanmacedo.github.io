import { motion } from "framer-motion";
import { Laptop, Database, Code, GitBranch, Server, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Backend",
      icon: <Server size={32} className="text-primary mb-3" />,
      skills: ["Java (21+)", "Spring Boot (3+)", "Spring Security", "JPA/Hibernate", "RESTful APIs", "Microsserviços"],
    },
    {
      name: "Frontend",
      icon: <Laptop size={32} className="text-primary mb-3" />,
      skills: ["React.js", "Next.js (Básico)", "Tailwind CSS", "Redux/Context API", "Axios", "HTML5/CSS3"],
    },
    {
      name: "Banco de Dados",
      icon: <Database size={32} className="text-primary mb-3" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Queries", "Design de Schemas"],
    },
    {
      name: "Ferramentas & DevOps",
      icon: <GitBranch size={32} className="text-primary mb-3" />,
      skills: ["Git/GitHub", "Docker", "Kubernetes (Básico)", "Maven/Gradle", "Postman", "AWS (Conceitos)"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      </motion.div>

      {/* Grid Responsivo: 1 coluna no mobile, 2 no tablet e 4 no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-3xl p-6 md:p-8 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6 mt-4 tracking-tight">
              {category.name}
            </h3>
            
            <ul className="space-y-3 w-full">
              {category.skills.map((skill, i) => (
                <li 
                  key={i} 
                  className="text-slate-400 text-sm flex items-center justify-start sm:justify-center lg:justify-start gap-2 border-b border-white/5 pb-2 last:border-0"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="group-hover:text-slate-200 transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", id: "hero" },
    { name: "Habilidades", id: "skills" },
    { name: "Projetos", id: "projects" },
    { name: "Contato", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          backgroundColor: scrolled || isOpen ? "rgba(15, 23, 42, 0.3)" : "rgba(15, 23, 42, 0)",
          backdropFilter: scrolled || isOpen ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled || isOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white tracking-tight cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Lohan <span className="text-primary font-black">Dev</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-primary font-medium cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* ESTA CAMADA ABAIXO FECHA O MENU AO CLICAR FORA */}
            <div 
              className="fixed inset-0 z-[80] bg-black/20" 
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed top-0 left-0 right-0 z-[90] bg-slate-900/95 backdrop-blur-xl md:hidden overflow-hidden border-b border-white/10"
            >
              <div className="flex flex-col items-center pt-24 pb-12 space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xl font-semibold text-slate-200 hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
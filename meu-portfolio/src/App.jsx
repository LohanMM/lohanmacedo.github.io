import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"; // Agora ele vai encontrar o arquivo!

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact /> {/* Adicionado aqui */}
      
      <footer className="py-12 text-center text-sm text-slate-500 border-t border-slate-700/50 mt-20">
        <p>&copy; {new Date().getFullYear()} Lohan Dev. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
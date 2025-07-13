import Navbar from "./components/Navbar";
import About from "./components/About";
import Formations from "./components/Formations";
import Competances from "./components/Competences";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-vh-100">
      <header>
        <Navbar/>
      </header>
      <main>
        <About/>
        <div className="section-separator"></div>
        <Formations/>
        <div className="section-separator"></div>
        <Competances/>
        <div className="section-separator"></div>
        <Project/>
        <div className="section-separator"></div>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
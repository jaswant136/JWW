import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Services />

        <Projects />

        <Pricing />

        <FAQ />

        <Contact />

        <Footer />

      </main>


    </div>
  );
}

export default App;
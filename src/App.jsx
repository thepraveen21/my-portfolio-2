import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Journey from "./sections/Journey";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Certificates />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
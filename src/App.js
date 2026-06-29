import "./styles/global.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
// import Services from "./components/Services/Services";
// import Gallery from "./components/Gallery/Gallery";
import Testimony from "./components/Testimony/Testimony";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Process />
        {/* <Services /> */}
        {/* <Gallery /> */}
        <Testimony />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
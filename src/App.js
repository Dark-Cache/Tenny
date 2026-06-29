import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Beauty from "./components/Beauty/Beauty";
// import Shot from "./components/Shot/Shot";
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
        <Beauty />
        {/* <Shot /> */}
        <Testimony />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

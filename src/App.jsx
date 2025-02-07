import AboutME from "./Components/AboutME";
import Banner from "./Components/Banner";
import ContactMe from "./Components/ContactMe";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <Banner />

        <section id="about" className="mt-20 py-6 w-10/12 mx-auto">
          <AboutME />
        </section>

        <section id="skills" className="mt-6 mb-6 py-6 w-10/12 mx-auto">
          <Skills />
        </section>

        <section id="portfolio" className="mt-6 mb-6 py-6 w-10/12 mx-auto">
          <Portfolio />
        </section>

        <section id="contact" className="mt-6 mb-6 py-6 w-9/12 mx-auto">
          <ContactMe />
        </section>
      </div>
    </>
  );
}

export default App;

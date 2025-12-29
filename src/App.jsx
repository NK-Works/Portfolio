import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import MagicCursor from './components/MagicCursor';

const App = () => {
  return (
    <>
      <MagicCursor />
      <div className="bg-black-100">
        <main className="max-w-7xl mx-auto relative">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          {/* <Clients /> */}
          <WorkExperience />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;

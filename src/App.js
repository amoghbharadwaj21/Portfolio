import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navigation';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Internship from './components/Internship';

function App() {
  return (
    <div className='dark'>
      <Navbar />
      <About />
      <TechStack />
      <Experience />
      <Internship />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

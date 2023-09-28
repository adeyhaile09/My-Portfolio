import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Blog />
        <Portfolio />

        <Contact />
      </main>
    </>
  );
};

export default App;

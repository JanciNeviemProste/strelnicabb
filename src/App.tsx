import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import GunsSection from './components/home/GunsSection';
import Packages from './components/home/Packages';
import Contact from './components/home/Contact';

function App() {
  useEffect(() => {
    // Add dark mode class to body
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <GunsSection />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

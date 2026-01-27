import React from 'react';
// Layout-Komponente importieren - umschließt die gesamte App
import Layout from './components/layout/layout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import GlowBackground from './components/layout/GlowBackground';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider defaultLang="de">
      <Layout>
        <div className="flex flex-col min-h-screen">
          
          <Hero />

          <GlowBackground>
            <About />
            <Skills />
            <Projects />
          </GlowBackground>

          <Contact />
      
          <Footer />
        </div>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
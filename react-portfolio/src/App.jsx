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
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider defaultLang="de">
      <Layout>
        <div className="flex flex-col min-h-screen">
          {/* Header component that contains the site title and logo */}
          {/* <Header /> */}

          {/* Navigation component for navigating between sections */}
          {/* <Navigation /> */}

          {/* Hero section that introduces the portfolio */}
          <Hero />

          {/* About section that provides information about the portfolio owner */}
          <About />

          {/* Projects section that showcases the owner's work */}
          <Projects />

          {/* Skills section that lists the owner's skills */}
          <Skills />

          {/* Contact section for getting in touch */}
          <Contact />

          {/* Footer component that contains copyright and links */}
          <Footer />
        </div>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// Layout-Komponente importieren - umschließt die gesamte App
import Layout from './components/layout/Layout';
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
import Banner from './components/sections/banner';
import Gallery from './components/sections/gallery';
import LegalNotice from './components/sections/LegalNotice';

const App = () => {
  // Scroll to hash targets on navigation
  const ScrollToHash = () => {
    const { hash, pathname } = useLocation();
    useEffect(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [hash, pathname]);
    return null;
  };

  return (
    <LanguageProvider defaultLang="de">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToHash />
        <Layout>
          <div className="flex flex-col min-h-screen">
           

            <main className="flex-1">
              <Routes>
                <Route
                  path="/"
                  element={(
                    <>
                      <Hero />
                      <GlowBackground>
                        <About />
                        <Skills />
                        <Projects />
                      </GlowBackground>
                      <Gallery />
                      <Contact />
                    </>
                  )}
                />
                <Route path="/legal-notice" element={<LegalNotice />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
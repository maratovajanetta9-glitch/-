
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('ru');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header 
        activeSection={activeSection} 
        currentLang={lang} 
        setLang={setLang} 
        t={t.nav} 
      />
      
      <main>
        <section id="home">
          <Hero t={t.hero} />
        </section>

        <section id="about" className="py-20 bg-white">
          <About t={t.about} />
        </section>

        <section id="skills" className="py-20 bg-slate-50">
          <Skills t={t.skills} />
        </section>

        <section id="experience" className="py-20 bg-white">
          <ExperienceTimeline t={t.experience} />
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact t={t.contact} />
        </section>
      </main>

      <Footer t={t.footer} />
    </div>
  );
};

export default App;

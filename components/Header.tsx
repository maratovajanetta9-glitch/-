
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../translations';

interface HeaderProps {
  activeSection: string;
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ activeSection, currentLang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'skills', label: t.skills },
    { id: 'experience', label: t.experience },
    { id: 'contact', label: t.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'Русский' },
    { code: 'ky', label: 'Кыргызча' },
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold font-serif tracking-tight">Жанетта<span className="text-indigo-600">.</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-sm font-medium transition-all hover:text-indigo-600 cursor-pointer py-2 ${
                    activeSection === link.id ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors"
              >
                <Globe size={16} className="text-indigo-600" />
                <span>{currentLang.toUpperCase()}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-indigo-50 transition-colors ${
                        currentLang === l.code ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 text-slate-600"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                  activeSection === link.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Language Selector Dropdown */}
      {isLangOpen && (
        <div className="md:hidden absolute top-16 right-12 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-[60]">
           {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsLangOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-indigo-50 transition-colors ${
                currentLang === l.code ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;


import React from 'react';
import { ChevronRight, Sparkles, Brain, Instagram } from 'lucide-react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
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
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fcfaf7]">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 animate-pulse">
              <Sparkles size={16} className="mr-2" />
              {t.status}
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl font-serif">
              <span className="block">{t.firstName}</span>
              <span className="block text-indigo-600">{t.lastName}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl md:mt-8 md:max-w-3xl leading-relaxed">
              {t.description}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95 duration-300 cursor-pointer"
              >
                {t.ctaContact}
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1 active:scale-95 duration-300 cursor-pointer"
              >
                {t.ctaAbout}
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-slate-400">
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-xl font-serif tracking-tight">{t.locationLabel}</span>
                <span className="text-sm">{t.locationCountry}</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-xl font-serif tracking-tight">{t.birthdayLabel}</span>
                <span className="text-sm">{t.birthdaySub}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end items-center">
             <div className="relative group">
                <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-indigo-600 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform"></div>
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000" 
                      alt="Janetta Maratova Portfolio" 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce">
                     <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                          <Brain size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.specialization}</p>
                          <p className="text-sm font-bold text-slate-900">{t.specializationSub}</p>
                        </div>
                     </div>
                  </div>

                  <a 
                    href="https://www.instagram.com/marrchj?igsh=MWM0NWJ3ZHdpcmJ6eA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-2 hover:bg-pink-50 transition-colors group/ig"
                  >
                    <Instagram size={20} className="text-pink-600" />
                    <span className="text-xs font-bold text-slate-800">@marrchj</span>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

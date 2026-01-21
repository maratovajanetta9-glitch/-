
import React from 'react';
import { Instagram } from 'lucide-react';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold font-serif tracking-tight">
            Жанетта<span className="text-indigo-600">.</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {currentYear} Маратова Жанетта. {t.rights}
          </p>

          <div className="flex items-center space-x-6 text-slate-400">
             <a 
               href="https://www.instagram.com/marrchj?igsh=MWM0NWJ3ZHdpcmJ6eA==" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors"
             >
                <Instagram size={20} />
                <span className="text-sm font-medium">Instagram</span>
             </a>
             <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
             <span className="text-xs uppercase tracking-widest font-bold">{t.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

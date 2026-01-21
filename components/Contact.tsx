
import React from 'react';
import { MessageCircle, Instagram, ExternalLink } from 'lucide-react';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6 text-white">{t.title}</h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          {t.text}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a 
          href="https://wa.me/996220456266" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center space-x-4 p-6 rounded-3xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all border border-[#25D366]/30 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20">
            <MessageCircle size={28} />
          </div>
          <div className="text-left">
            <p className="text-xs text-[#25D366] font-bold uppercase tracking-wider mb-1">{t.waLabel}</p>
            <p className="text-xl font-bold text-white flex items-center">
              +996 220 456 266
              <ExternalLink size={16} className="ml-2 opacity-50" />
            </p>
          </div>
        </a>

        <a 
          href="https://www.instagram.com/marrchj?igsh=MWM0NWJ3ZHdpcmJ6eA==" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center space-x-4 p-6 rounded-3xl bg-pink-500/10 hover:bg-pink-500/20 transition-all border border-pink-500/30 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
            <Instagram size={28} />
          </div>
          <div className="text-left">
            <p className="text-xs text-pink-400 font-bold uppercase tracking-wider mb-1">{t.igLabel}</p>
            <p className="text-xl font-bold text-white flex items-center">
              @marrchj
              <ExternalLink size={16} className="ml-2 opacity-50" />
            </p>
          </div>
        </a>
      </div>
      
      <div className="mt-16 pt-10 border-t border-white/5 opacity-40">
        <p className="text-sm text-slate-500">Бишкек, Кыргызстан</p>
      </div>
    </div>
  );
};

export default Contact;

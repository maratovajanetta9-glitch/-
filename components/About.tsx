
import React from 'react';
import { GraduationCap, Award, Compass, Heart, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">{t.title}</h2>
        <p className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex space-x-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.eduTitle}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t.eduText}
              </p>
            </div>
          </div>

          <div className="flex space-x-4 p-6 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-100 transform hover:-translate-y-1 transition-transform cursor-default">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.grantTitle}</h3>
              <p className="text-indigo-50 leading-relaxed">
                {t.grantText}
              </p>
            </div>
          </div>

          <div className="flex space-x-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Compass size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.growthTitle}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t.growthText}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-emerald-600 text-xs font-bold mb-4 border border-emerald-100 uppercase tracking-wider">
            {t.uniqueLabel}
          </div>
          <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6 italic">{t.uniqueQuote}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t.uniqueText}
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <Heart size={16} className="text-rose-500" />
                <span className="text-sm font-medium">{t.trait1}</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <Sparkles size={16} className="text-amber-500" />
                <span className="text-sm font-medium">{t.trait2}</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <CheckCircle2 size={16} className="text-indigo-500" />
                <span className="text-sm font-medium">{t.trait3}</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <MapPin size={16} className="text-slate-500" />
                <span className="text-sm font-medium">{t.trait4}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { Coffee, ShoppingBag, Globe, Gift, Briefcase } from 'lucide-react';

interface ExperienceTimelineProps {
  t: any;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">{t.title}</h2>
        <p className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-100 transition-all">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Coffee size={28} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.hospitalityTitle}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t.hospitalityText}
          </p>
          <ul className="space-y-3">
             <li className="flex items-center text-sm text-slate-500">
                <Globe size={16} className="mr-2 text-indigo-400" /> {t.intlExperience}
             </li>
             <li className="flex items-center text-sm text-slate-500">
                <Briefcase size={16} className="mr-2 text-indigo-400" /> {t.teamwork}
             </li>
          </ul>
        </div>

        <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-100 transition-all">
          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <ShoppingBag size={28} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.businessTitle}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t.businessText}
          </p>
          <ul className="space-y-3">
             <li className="flex items-center text-sm text-slate-500">
                <Gift size={16} className="mr-2 text-rose-400" /> {t.giftBoxes}
             </li>
             <li className="flex items-center text-sm text-slate-500">
                <ShoppingBag size={16} className="mr-2 text-rose-400" /> {t.clothing}
             </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">{t.traitsTitle}</h4>
            <p className="text-slate-300">
              {t.traitsText}
            </p>
         </div>
         <div className="flex gap-4">
            <div className="bg-white/10 px-6 py-4 rounded-2xl text-center border border-white/10">
               <div className="text-3xl font-bold text-indigo-400">100%</div>
               <div className="text-xs uppercase tracking-wider text-slate-400">{t.deadlinesLabel}</div>
            </div>
            <div className="bg-white/10 px-6 py-4 rounded-2xl text-center border border-white/10">
               <div className="text-3xl font-bold text-emerald-400">0</div>
               <div className="text-xs uppercase tracking-wider text-slate-400">{t.feedbackLabel}</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;


import React from 'react';
import { Zap, Globe2, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  t: any;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const techSkills = [
    { name: t.skill1, level: 95 },
    { name: t.skill2, level: 90 },
    { name: t.skill3, level: 85 },
    { name: t.skill4, level: 100 },
  ];

  const languages = [
    { name: t.langKy, status: t.statusFluent, level: 100 },
    { name: t.langRu, status: t.statusFluent, level: 100 },
    { name: t.langTr, status: t.statusAdvanced, level: 75 },
    { name: t.langEn, status: t.statusPre, level: 45 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">{t.title}</h2>
        <p className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-slate-900 flex items-center">
            <Zap className="mr-2 text-amber-500" size={20} />
            {t.profTitle}
          </h3>
          <div className="space-y-6">
            {techSkills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-indigo-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-slate-900 flex items-center">
            <Globe2 className="mr-2 text-indigo-500" size={20} />
            {t.langTitle}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((lang, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-slate-900">{lang.name}</span>
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                  </div>
                </div>
                <div className="text-sm text-slate-500 mb-4">{lang.status}</div>
                <div className="flex space-x-1">
                   {[1, 2, 3, 4, 5].map((circle) => (
                     <div 
                        key={circle} 
                        className={`h-1.5 flex-1 rounded-full ${
                          circle * 20 <= lang.level ? 'bg-indigo-600' : 'bg-slate-100'
                        }`}
                     ></div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

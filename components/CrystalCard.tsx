import React from 'react';
import { Sparkles } from 'lucide-react';
import { ELEMENT_MAP, DEFAULT_ELEMENT } from '../constants';

interface CrystalCardProps {
  title: string;
  ageRange: string;
  numbers: number[];
}

export const CrystalCard: React.FC<CrystalCardProps> = ({ title, ageRange, numbers }) => {
  // Collect unique elements and crystals
  const elements = numbers.map(n => ({ num: n, ...((ELEMENT_MAP as any)[n] || DEFAULT_ELEMENT) }));
  
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-bold text-slate-800 flex items-center gap-2 text-base">
            <Sparkles size={16} className="text-amber-500" />
            {title}
          </h4>
          <p className="text-xs text-slate-500 mt-1 font-medium bg-slate-100 inline-block px-2 py-0.5 rounded-full">{ageRange}</p>
        </div>
        <div className="flex -space-x-2">
           {elements.map((el, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${el.bg} ${el.color} border-2 border-white ring-1 ring-slate-100 shadow-sm z-[${10-i}]`}
                title={`Number ${el.num}: ${el.element}`}
              >
                {el.num}
              </div>
           ))}
        </div>
      </div>
      
      <div className="space-y-3">
         {elements.map((el, i) => (
           <div key={i} className={`flex items-start gap-3 text-sm p-3 rounded-xl border ${el.borderColor} ${el.bg} bg-opacity-30`}>
              <div className="mt-0.5 min-w-[24px] font-bold text-center bg-white rounded-lg shadow-sm py-1">
                <span className={`${el.color}`}>{el.element}</span>
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap gap-1.5 mb-1.5">
                    {el.crystalColors.map((c: string, ci: number) => (
                      <span key={ci} className="w-3 h-3 rounded-full border border-slate-200 shadow-sm" style={{ backgroundColor: c }}></span>
                    ))}
                 </div>
                 <p className="text-slate-700 text-xs leading-relaxed font-medium">{el.crystals}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
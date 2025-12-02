import React, { useState, useEffect } from 'react';
import { Calculator, Info, User, Gem, CalendarDays } from 'lucide-react';
import { calculateNumerology } from './utils/numerology';
import { LifePathDiagram } from './components/LifePathDiagram';
import { CrystalCard } from './components/CrystalCard';
import { ELEMENT_MAP, DEFAULT_ELEMENT } from './constants';
import { NumerologyResult } from './types';

const App: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [result, setResult] = useState<NumerologyResult | null>(null);

  useEffect(() => {
    if (birthDate) {
      const calc = calculateNumerology(birthDate);
      setResult(calc);
    } else {
      setResult(null);
    }
  }, [birthDate]);

  const getMainElement = (num: number) => (ELEMENT_MAP as any)[num] || DEFAULT_ELEMENT;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2 text-indigo-600">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Calculator size={20} />
              </div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">SoulCode <span className="text-indigo-600 font-light hidden sm:inline">| Life Numerology</span></h1>
           </div>
           
           <div className="relative group">
              <div className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-lg cursor-pointer">
                <CalendarDays size={16} className="text-slate-500" />
                <input 
                  type="date" 
                  className="bg-transparent border-none focus:outline-none text-sm font-medium text-slate-700 w-32 cursor-pointer date-input-full"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  placeholder="Select Date"
                />
              </div>
           </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {result ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up">
            
            {/* Left Column: Visual Diagram */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                   <h3 className="font-bold text-slate-800">Life Code Chart</h3>
                   <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{result.dateDetails.year}-{result.dateDetails.month}-{result.dateDetails.day}</span>
                </div>
                <LifePathDiagram data={result} />
                
                {/* Simple Legend */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2 justify-center text-[10px]">
                   {Object.entries(ELEMENT_MAP).map(([num, info]: [string, any]) => (
                     <div key={num} className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">
                        <span className={`w-2 h-2 rounded-full ${info.bg.replace('bg-', 'bg-')}`} style={{backgroundColor: info.hex}}></span>
                        <span className="font-bold text-slate-600">{num}</span>
                        <span className="text-slate-400">{info.element}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Core Trait Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 opacity-10 transition-transform group-hover:scale-150 ${getMainElement(result.inner.O).bg.replace('bg-', 'bg-')}`} style={{backgroundColor: getMainElement(result.inner.O).hex}}></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        Main Character
                        <Info size={14} className="text-slate-400" />
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">Represents 60% of your personality & core essence.</p>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg text-white`} style={{ backgroundColor: getMainElement(result.inner.O).hex }}>
                      {result.inner.O}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Element</span>
                       <div className={`text-lg font-bold mt-1 ${getMainElement(result.inner.O).color}`}>
                         {getMainElement(result.inner.O).element}
                       </div>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Color</span>
                       <div className="flex gap-1 mt-2">
                          {getMainElement(result.inner.O).crystalColors.map((c: string, i: number) => (
                             <div key={i} className="w-5 h-5 rounded-full border border-slate-200 shadow-sm" style={{backgroundColor: c}}></div>
                          ))}
                       </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Right Column: Analysis & Crystals */}
            <div className="lg:col-span-7 flex flex-col gap-6">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                     <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Paternal Gene</span>
                        <div className="text-2xl font-bold text-slate-700 mt-1">{result.inner.M}</div>
                     </div>
                     <User className="text-slate-200" size={32} />
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                     <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Maternal Gene</span>
                        <div className="text-2xl font-bold text-slate-700 mt-1">{result.inner.N}</div>
                     </div>
                     <User className="text-slate-200" size={32} />
                  </div>
               </div>

               <div className="bg-slate-100 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Gem size={20} className="text-indigo-600" />
                    Elemental Balancing
                  </h3>
                  
                  <CrystalCard 
                    title="Youth / Career (Left Triangle)" 
                    ageRange="Age 21 - 40"
                    numbers={result.outer.left.numbers}
                  />

                  <CrystalCard 
                    title="Middle Age / Leadership (Top Triangle)" 
                    ageRange="Age 41 - 60"
                    numbers={result.outer.top.numbers}
                  />

                  <CrystalCard 
                    title="Golden Age / Wisdom (Right Triangle)" 
                    ageRange="Age 61+"
                    numbers={result.outer.right.numbers}
                  />
                  
                  <div className="text-center mt-4 text-xs text-slate-400">
                    Wear crystals corresponding to your current life stage to harmonize energy fields.
                  </div>
               </div>
            </div>

          </div>
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
              <Calculator size={40} className="text-indigo-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Discover Your Soul Code</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8 text-lg">
              Enter your birth date above to reveal your life path chart, hidden talents, and crystal energy recommendations.
            </p>
            
            <div className="relative inline-block group">
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-indigo-200 flex items-center gap-2 outline-none pointer-events-none"
              >
                <CalendarDays size={20} />
                <span>Select Birth Date</span>
              </button>
              {/* Overlay Input: Covers the button completely. The weird class 'date-input-full' expands the click area */}
              <input 
                type="date" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 date-input-full"
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
          </div>
        )}
      </main>
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        
        /* 
         * Important Hack: 
         * Expand the calendar picker indicator to fill the entire input.
         * This ensures clicking anywhere on the transparent input triggers the picker
         * (instead of just focusing the text field on Desktop).
         */
        .date-input-full::-webkit-calendar-picker-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          opacity: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default App;
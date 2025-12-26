
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Search, Info, MousePointer2, Clock, Zap } from 'lucide-react';

const DemoScanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [activePattern, setActivePattern] = useState<number | null>(null);

  const patterns = [
    {
      id: 1,
      title: "Confirmshaming",
      description: "Design that shames the user for not selecting an option.",
      top: "10%",
      left: "15%",
      severity: "Medium"
    },
    {
      id: 2,
      title: "Hidden Costs",
      description: "Hidden fees added during the final stage of a checkout.",
      top: "40%",
      left: "70%",
      severity: "High"
    },
    {
      id: 3,
      title: "Nagging",
      description: "Persistent interruptions asking to turn on notifications.",
      top: "70%",
      left: "30%",
      severity: "Low"
    }
  ];

  const handleScanToggle = () => {
    setIsScanning(!isScanning);
    if (!isScanning) {
      setActivePattern(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See the Invisible Infrastructure</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Manipulative design is often subtler than a loud pop-up. Use the Lightbeam toggle to see how our AI identifies psychological "traps" in a standard browsing session.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Mock Browser Interface */}
        <div className="lg:col-span-8 relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 aspect-[16/10] relative group">
            {/* Scanner Overlay Layer */}
            {isScanning && (
              <div className="absolute inset-0 z-20 pointer-events-none transition-all duration-700">
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
                {/* Scan Line Animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-[scan_3s_ease-in-out_infinite]" />
              </div>
            )}

            {/* Mock Web Content */}
            <div className="p-8 text-slate-900 h-full flex flex-col gap-6">
              <div className="flex justify-between items-start mb-8">
                <div className="w-32 h-8 bg-slate-100 rounded" />
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full" />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="w-3/4 h-6 bg-slate-100 rounded" />
                  <div className="w-1/2 h-4 bg-slate-100 rounded" />
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-slate-300 font-bold text-4xl italic uppercase">Item</span>
                  </div>
                  <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-slate-300 font-bold text-4xl italic uppercase">Item</span>
                  </div>
                  <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-slate-300 font-bold text-4xl italic uppercase">Item</span>
                  </div>
                </div>

                <div className="flex justify-end pt-10">
                  <div className={`px-8 py-3 rounded-md transition-colors ${isScanning ? 'bg-amber-100 border-2 border-dashed border-amber-500 text-amber-600' : 'bg-blue-600 text-white'}`}>
                    {isScanning ? 'Detected Trap' : 'Checkout'}
                  </div>
                </div>
              </div>

              {/* Pattern Markers */}
              {isScanning && patterns.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setActivePattern(activePattern === p.id ? null : p.id)}
                  className={`absolute z-30 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activePattern === p.id ? 'bg-amber-500 scale-125' : 'bg-amber-500/80 hover:scale-110'
                  } border-2 border-white shadow-lg cursor-pointer`}
                  style={{ top: p.top, left: p.left }}
                >
                  <Search className={`w-4 h-4 ${activePattern === p.id ? 'text-white' : 'text-slate-950'}`} />
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-25 -z-10" />
                </button>
              ))}
            </div>

            {/* Pattern Detail Popup */}
            {isScanning && activePattern && (
              <div 
                className="absolute z-40 bg-slate-900 text-white p-5 rounded-xl shadow-2xl border border-amber-500/30 w-64 animate-in fade-in zoom-in duration-200"
                style={{ 
                  top: `calc(${patterns.find(p => p.id === activePattern)?.top} + 40px)`, 
                  left: patterns.find(p => p.id === activePattern)?.left,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-amber-400">{patterns.find(p => p.id === activePattern)?.title}</h4>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                    patterns.find(p => p.id === activePattern)?.severity === 'High' ? 'bg-red-500' : 'bg-slate-700'
                  }`}>
                    {patterns.find(p => p.id === activePattern)?.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {patterns.find(p => p.id === activePattern)?.description}
                </p>
                <button className="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded border border-amber-500/30 transition-colors uppercase tracking-widest">
                  Neutralize Pattern
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Control Center
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Illuminate</span>
                  <span className="text-xs text-slate-500">Expose hidden design intents</span>
                </div>
                <button 
                  onClick={handleScanToggle}
                  className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${isScanning ? 'bg-amber-500' : 'bg-slate-700'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${isScanning ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Scanning HTML Nodes... 2.4k tracked</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Engagement Loop Identified</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <span>Behavioral Heuristics Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-2xl flex items-start gap-4">
            <Info className="w-6 h-6 text-amber-500 shrink-0" />
            <p className="text-sm text-slate-400 leading-relaxed italic">
              "Most sites use dynamic layouts that prevent traditional ad-blockers. Lightbeam monitors DOM changes to see when content is specifically designed to bypass your intent."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0.5; }
          50% { top: 100%; opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default DemoScanner;


import React from 'react';
import { ChevronRight, ArrowRight, MousePointer2, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          LIGHTBEAM V0.2 PATHFINDER
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Reclaim your focus. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Illuminate the invisible.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          The first transparency extension that detects and visualizes dark patterns, 
          manipulative UX, and hidden incentives in real-time. 
          Step out of the engagement loop.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 transition-all glow-amber transform hover:-translate-y-1">
            Install on Chrome <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-700 transition-all border border-slate-700">
            View Source on GitHub
          </button>
        </div>

        {/* Visual Mockup Overlay */}
        <div className="w-full max-w-5xl relative mt-8">
          <div className="absolute inset-0 bg-amber-500/10 rounded-2xl blur-3xl -z-10" />
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser Header */}
            <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 bg-slate-950/50 rounded h-6 mx-4 border border-slate-700 flex items-center px-3 text-[10px] text-slate-500 font-mono">
                https://social-network.com/feed
              </div>
            </div>
            
            {/* Visualizing manipulation demo placeholder */}
            <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
                  <AlertCircle className="w-3 h-3" /> EXPOSING MANIPULATION
                </div>
                <h3 className="text-2xl font-bold text-white">The "Engagement" Ledger</h3>
                <p className="text-slate-400">
                  We don't just block ads. We highlight the infinite scroll traps, 
                  hidden "cancel" buttons, and AI-driven recommendation hooks 
                  designed to keep you scrolling against your will.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                    <div className="text-amber-500 font-bold text-2xl mb-1">2,412</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Traps Disarmed</div>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                    <div className="text-amber-500 font-bold text-2xl mb-1">4.2hr</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Attention Saved</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800/30 rounded-xl aspect-square p-6 flex flex-col gap-4 border border-slate-700/50">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-700 animate-pulse" />
                     <div className="flex-1 h-4 bg-slate-700 rounded animate-pulse" />
                   </div>
                   <div className="w-full h-32 bg-slate-700 rounded-lg animate-pulse" />
                   <div className="flex items-center gap-4">
                     <div className="w-16 h-8 bg-amber-500/20 rounded-md border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-500 font-bold uppercase tracking-tighter">
                       ILLUMINATED
                     </div>
                     <div className="flex-1 h-3 bg-slate-800 rounded animate-pulse" />
                   </div>
                   {/* Tooltip Overlay */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 p-3 rounded-lg text-xs font-bold shadow-xl border border-white/20 animate-bounce">
                     Detected: Infinite Scroll Hook
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

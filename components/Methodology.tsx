
import React from 'react';
import { BookOpen, Shield, Globe } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest text-xs uppercase">
            <BookOpen className="w-4 h-4" /> The Harm-Null Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ethically Audited Insights</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Lightbeam isn't just an extension; it's a movement toward honest technology. 
            Our detection engine is built on the peer-reviewed **Harm-Null Framework**, 
            developed to categorize digital nudges based on their impact on user autonomy.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-amber-500 rounded-full" />
              <div>
                <h4 className="font-bold text-white mb-1">Level 0: Intentional Design</h4>
                <p className="text-sm text-slate-500">Design that aids user goals without deceptive friction.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-slate-700 rounded-full" />
              <div>
                <h4 className="font-bold text-slate-400 mb-1">Level 1: Dark Patterns</h4>
                <p className="text-sm text-slate-500">Deceptive interfaces that trick users into actions they didn't intend.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-slate-800 rounded-full" />
              <div>
                <h4 className="font-bold text-slate-400 mb-1">Level 2: Algorithmic Captivity</h4>
                <p className="text-sm text-slate-500">Systemic engagement loops designed to erode willpower.</p>
              </div>
            </div>
          </div>
          
          <button className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all group pt-4">
            Read the Whitepaper <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-slate-900 border border-slate-800 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-amber-500 text-6xl font-serif mb-6 opacity-50">"</div>
              <p className="text-2xl text-slate-300 font-light leading-snug italic">
                Technology should be a tool for the mind, not a leash for the attention. 
                Our mission is to make the invisible strings visible.
              </p>
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden">
                <img src="https://picsum.photos/seed/lightbeam-founder/100/100" alt="Founder" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Dr. Aris Vondrak</div>
                <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">Lead Ethics Researcher</div>
              </div>
            </div>

            {/* Decorative Grid Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rotate-45 transform translate-x-16 -translate-y-16 border-l border-b border-amber-500/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;

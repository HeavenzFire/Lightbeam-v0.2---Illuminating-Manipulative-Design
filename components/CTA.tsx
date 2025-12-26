
import React from 'react';
import { Download, Chrome, Github } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <div className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 p-12 md:p-20 text-center relative overflow-hidden glow-amber">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 leading-tight">
            Ready to see the <br className="hidden md:block" /> invisible web?
          </h2>
          <p className="text-slate-900/80 text-xl font-medium mb-12 max-w-xl mx-auto">
            Join 250,000+ users who have reclaimed their attention from manipulative design systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-900 transition-all shadow-xl group">
              <Chrome className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Add to Chrome
            </button>
            <button className="flex items-center gap-3 bg-white/20 text-slate-950 px-10 py-5 rounded-full text-lg font-bold backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all">
              <Download className="w-6 h-6" />
              Firefox Add-on
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-slate-950/60 font-semibold text-sm">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" /> v0.2.4-stable
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-950/20" />
            <div>GPLv3 License</div>
            <div className="w-1 h-1 rounded-full bg-slate-950/20" />
            <div>Zero-Data Retention</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

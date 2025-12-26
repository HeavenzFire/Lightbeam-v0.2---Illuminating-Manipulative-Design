
import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center glow-amber transition-transform group-hover:scale-110">
            <Sparkles className="text-slate-950 w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Lightbeam</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
          <a href="#demo" className="hover:text-amber-400 transition-colors">Live Demo</a>
          <a href="#methodology" className="hover:text-amber-400 transition-colors">Methodology</a>
          <a href="#privacy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Privacy
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-white px-5 py-2 rounded-full border border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all">
            Sign In
          </button>
          <button className="text-sm font-bold bg-amber-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-amber-400 transition-all glow-amber">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

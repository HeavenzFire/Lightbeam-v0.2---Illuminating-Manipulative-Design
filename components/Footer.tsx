
import React from 'react';
import { Github, Twitter, Mail, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
              <Sparkles className="text-slate-950 w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lightbeam</span>
          </div>
          <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
            The transparency layer for the modern internet. Built by the Attention Integrity Collective.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors border border-slate-800">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors border border-slate-800">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors border border-slate-800">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6">Product</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Extension</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Pattern Library</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">API for Sites</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Audit Service</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6">Transparency</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Our Methodology</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Harm-Null Spec</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-2">
          <h5 className="text-white font-bold mb-6">Stay Informed</h5>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Get monthly deep-dives on manipulative design patterns discovered in the wild.
          </p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button className="bg-amber-500 text-slate-950 px-4 py-3 rounded-lg text-sm font-bold hover:bg-amber-400 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} Lightbeam Transparency Project. All rights reserved.
        </div>
        <div className="flex gap-8 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <a href="#" className="hover:text-amber-500 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Brand Assets</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contributors</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

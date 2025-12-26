
import React from 'react';
import { Target, Layers, ShieldCheck, Activity, Brain, Clock } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Pattern Detection",
    description: "Identifies over 150+ known dark patterns using our Harm-Null classification framework."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Feed Ledger",
    description: "Tracks the ratio of organic content vs. algorithms designed to maximize session length."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Privacy Audit",
    description: "Visualizes data egress in real-time, showing exactly where your scroll behavior is being sent."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Cognitive Offload",
    description: "Neutralizes FOMO-driven notifications and 'fake' timers that create artificial urgency."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Session Awareness",
    description: "A gentle pulse that reminds you when you've entered an engagement loop."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Intervention Logs",
    description: "Export data on how much time you've reclaimed from manipulative platform design."
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Clarity, Not Addiction</h2>
          <p className="text-xl text-slate-400">
            Lightbeam v0.2 transitions from observation to intervention. 
            We provide the tools you need to browse with agency.
          </p>
        </div>
        <div className="hidden lg:block text-amber-500 font-mono text-sm tracking-widest border-l-2 border-amber-500 pl-6 h-12 flex items-center">
          SYSTEM_STATUS: RESOLVED_INTENT
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

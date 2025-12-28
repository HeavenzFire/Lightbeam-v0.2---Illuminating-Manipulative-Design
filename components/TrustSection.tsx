
import React from 'react';
import { ShieldAlert, UserX, DatabaseZap, CheckCircle2, XCircle } from 'lucide-react';

const TrustSection: React.FC = () => {
  const constraints = [
    {
      icon: <UserX className="w-6 h-6 text-amber-400" />,
      title: "No Identity Harvesting",
      description: "Analysis is performed against the interface, not the user. We never associate browsing data with a real-world identity."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      title: "Non-Interference Policy",
      description: "We preserve the platform's original state while adding a layer of transparency. No broken layouts, no hidden features."
    },
    {
      icon: <DatabaseZap className="w-6 h-6 text-amber-400" />,
      title: "Zero-Cloud Runtime",
      description: "Your session analysis stays in your volatile RAM. No history is stored, and no cloud syncing is required."
    }
  ];

  const negativeConstraints = [
    "Does not log into your accounts",
    "Does not modify or block platform behavior",
    "Does not collect or transmit personal data"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-8 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl font-bold text-white mb-4">Boundary of Operation</h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            Credibility is built on restraint. To protect your digital agency, we operate within strict ethical and technical boundaries.
          </p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {constraints.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center relative shadow-lg">
          <div className="absolute inset-0 bg-red-500/5 rounded-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20 uppercase tracking-widest mb-6 w-fit relative z-10">
            Strict Non-Action List
          </div>
          
          <h3 className="text-xl font-bold text-white mb-6 relative z-10">What Lightbeam Does <span className="text-red-400">NOT</span> Do</h3>
          
          <ul className="space-y-4 relative z-10">
            {negativeConstraints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 group">
                <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5 group-hover:text-red-500 transition-colors" />
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-dashed border-slate-800 relative z-10">
            <p className="text-[11px] text-slate-500 italic leading-relaxed">
              "Most transparency tools eventually succumb to 'feature creep'. Lightbeam is mathematically constrained to observation only."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;

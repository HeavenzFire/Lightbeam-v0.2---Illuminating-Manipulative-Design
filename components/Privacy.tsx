
import React from 'react';
import { Shield, Lock, EyeOff, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="inline-flex p-3 bg-green-500/10 text-green-500 rounded-full mb-8">
        <Shield className="w-8 h-8" />
      </div>
      <h2 className="text-4xl font-bold text-white mb-6">Zero Knowledge. Absolute Privacy.</h2>
      <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
        We don't just detect data-hungry patterns—we protect you from them. 
        Lightbeam runs entirely on your local machine.
      </p>

      <div className="grid sm:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-6 text-amber-400">
            <Lock className="w-full h-full" />
          </div>
          <h4 className="font-bold text-white mb-2">Local Processing</h4>
          <p className="text-sm text-slate-500">Analysis happens in your browser. Your data never leaves your device.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-6 text-amber-400">
            <EyeOff className="w-full h-full" />
          </div>
          <h4 className="font-bold text-white mb-2">No Tracking</h4>
          <p className="text-sm text-slate-500">No analytics, no cookies, no telemetry. We don't even know you exist.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-6 text-amber-400">
            <UserCheck className="w-full h-full" />
          </div>
          <h4 className="font-bold text-white mb-2">Open Source</h4>
          <p className="text-sm text-slate-500">Every line of code is available for audit. Verifiable trust, always.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

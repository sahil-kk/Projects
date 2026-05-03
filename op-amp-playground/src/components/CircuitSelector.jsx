import React from 'react';
import { Settings, Zap, Activity } from 'lucide-react';

export const CircuitSelector = ({ selected, onChange }) => {
  const circuits = [
    { id: 'inverting', label: 'Inverting Amplifier' },
    { id: 'non-inverting', label: 'Non-Inverting Amplifier' },
    { id: 'integrator', label: 'Integrator' },
    { id: 'differentiator', label: 'Differentiator' }
  ];

  return (
    <div className="neu-flat p-4 rounded-2xl mb-6 border-none">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="text-accent w-5 h-5" />
        <h2 className="text-lg font-semibold text-text-main">Circuit Type</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {circuits.map(circuit => (
          <button
            key={circuit.id}
            onClick={() => onChange(circuit.id)}
            className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 text-left border-none ${
              selected === circuit.id 
                ? 'neu-pressed text-primary' 
                : 'neu-convex text-text-muted hover:text-text-main'
            }`}
          >
            {circuit.label}
          </button>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { AlertTriangle, TrendingUp, Maximize } from 'lucide-react';

export const OutputStats = ({ stats }) => {
  const { isClipping, isSlewRateLimited, peakVoltage, idealGain } = stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        icon={<TrendingUp className="w-5 h-5 text-primary" />}
        title="Ideal Gain (Av)"
        value={typeof idealGain === 'number' ? idealGain.toFixed(2) : idealGain}
      />
      <StatCard 
        icon={<Maximize className="w-5 h-5 text-secondary" />}
        title="Peak Output"
        value={`${peakVoltage.toFixed(2)} V`}
      />
      <StatCard 
        icon={<AlertTriangle className={`w-5 h-5 ${isClipping ? 'text-danger' : 'text-text-muted'}`} />}
        title="Clipping (Saturation)"
        value={isClipping ? 'Active' : 'None'}
        alert={isClipping}
      />
      <StatCard 
        icon={<AlertTriangle className={`w-5 h-5 ${isSlewRateLimited ? 'text-danger' : 'text-text-muted'}`} />}
        title="Slew Rate Limiting"
        value={isSlewRateLimited ? 'Active' : 'None'}
        alert={isSlewRateLimited}
      />
    </div>
  );
};

const StatCard = ({ icon, title, value, alert }) => (
  <div className={`neu-convex p-4 rounded-2xl flex items-center gap-4 transition-colors border-none ${alert ? 'shadow-[inset_0_0_15px_rgba(239,68,68,0.2)]' : ''}`}>
    <div className="p-3 neu-pressed rounded-xl border-none">
      {icon}
    </div>
    <div>
      <p className="text-sm text-text-muted font-medium">{title}</p>
      <p className={`text-xl font-bold ${alert ? 'text-danger' : 'text-text-main'}`}>{value}</p>
    </div>
  </div>
);

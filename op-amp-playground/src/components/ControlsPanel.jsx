import React from 'react';
import { Sliders, Activity, Cpu } from 'lucide-react';

const OPAMP_PRESETS = {
  custom: { name: 'Custom' },
  ideal: { slewRate: 20, gbwp: 1e9, Vcc: 15, name: 'Ideal-ish' },
  lm741: { slewRate: 0.5, gbwp: 1e6, Vcc: 15, name: 'LM741 (Classic)' },
  tl072: { slewRate: 13, gbwp: 3e6, Vcc: 15, name: 'TL072 (Audio)' },
  op07: { slewRate: 0.3, gbwp: 0.6e6, Vcc: 15, name: 'OP07 (Precision)' }
};

export const ControlsPanel = ({ params, setParams, circuitType }) => {
  const handleChange = (key, value) => {
    setParams(prev => ({ ...prev, [key]: Number(value), preset: 'custom' }));
  };

  const handleTextChange = (key, value) => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  const handlePresetChange = (presetKey) => {
    if (presetKey === 'custom') {
      setParams(prev => ({ ...prev, preset: 'custom' }));
      return;
    }
    const preset = OPAMP_PRESETS[presetKey];
    setParams(prev => ({
      ...prev,
      preset: presetKey,
      slewRate: preset.slewRate,
      gbwp: preset.gbwp,
      Vcc: preset.Vcc
    }));
  };

  const showCapacitor = circuitType === 'integrator' || circuitType === 'differentiator';

  return (
    <div className="neu-flat p-4 rounded-2xl flex flex-col gap-6 border-none">
      
      {/* Op-Amp Model Selection */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="text-primary w-5 h-5" />
          <h2 className="text-lg font-semibold text-text-main">Op-Amp Model</h2>
        </div>
        <select 
          value={params.preset || 'custom'} 
          onChange={(e) => handlePresetChange(e.target.value)}
          className="w-full neu-pressed bg-transparent text-text-main rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors border-none"
        >
          {Object.entries(OPAMP_PRESETS).map(([k, v]) => (
            <option key={k} value={k}>{v.name}</option>
          ))}
        </select>
      </div>

      <div className="h-px bg-surface-hover w-full" />

      {/* Circuit Parameters */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="text-accent w-5 h-5" />
          <h2 className="text-lg font-semibold text-text-main">Circuit Parameters</h2>
        </div>
        
        <div className="space-y-4">
          <ControlSlider label="Rin (Ω)" value={params.Rin} min={100} max={100000} step={100} onChange={(v) => handleChange('Rin', v)} />
          <ControlSlider label="Rf (Ω)" value={params.Rf} min={100} max={100000} step={100} onChange={(v) => handleChange('Rf', v)} />
          
          {showCapacitor && (
            <ControlSlider label="Capacitor (F)" value={params.C} min={1e-9} max={1e-4} step={1e-9} onChange={(v) => handleChange('C', v)} isLog />
          )}
          
          <ControlSlider label="Supply Voltage ±Vcc (V)" value={params.Vcc} min={1} max={24} step={0.5} onChange={(v) => handleChange('Vcc', v)} />
          <ControlSlider label="Slew Rate (V/µs)" value={params.slewRate} min={0.1} max={20} step={0.1} onChange={(v) => handleChange('slewRate', v)} />
          <ControlSlider label="GBWP (Hz)" value={params.gbwp || 1e6} min={1e5} max={1e7} step={1e5} onChange={(v) => handleChange('gbwp', v)} isLog />
        </div>
      </div>

      <div className="h-px bg-surface-hover w-full" />

      {/* Input Signal */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-secondary w-5 h-5" />
          <h2 className="text-lg font-semibold text-text-main">Input Signal</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-muted">Waveform</label>
            <select 
              value={params.waveform} 
              onChange={(e) => handleTextChange('waveform', e.target.value)}
              className="neu-pressed bg-transparent text-text-main rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors border-none"
            >
              <option value="sine">Sine</option>
              <option value="square">Square</option>
              <option value="triangle">Triangle</option>
            </select>
          </div>
          
          <ControlSlider label="Frequency (Hz)" value={params.freq} min={1} max={100000} step={1} onChange={(v) => handleChange('freq', v)} />
          <ControlSlider label="Amplitude (V)" value={params.amplitude} min={0.1} max={10} step={0.1} onChange={(v) => handleChange('amplitude', v)} />
          <ControlSlider label="Offset (V)" value={params.offset} min={-5} max={5} step={0.1} onChange={(v) => handleChange('offset', v)} />
          <ControlSlider label="Noise Level" value={params.noiseLevel || 0} min={0} max={1} step={0.01} onChange={(v) => handleChange('noiseLevel', v)} />
        </div>
      </div>
    </div>
  );
};

const ControlSlider = ({ label, value, min, max, step, onChange, isLog }) => {
  let displayValue = value;
  if (isLog && value) {
    displayValue = Number(value).toExponential(2);
  } else if (typeof value === 'number') {
    displayValue = Number(value.toFixed(2));
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-text-muted">{label}</label>
        <span className="text-sm font-mono text-primary neu-pressed px-3 py-1 rounded-lg border-none">{displayValue}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
};

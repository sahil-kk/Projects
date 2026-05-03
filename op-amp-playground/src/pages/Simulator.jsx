import React, { useState, useMemo } from 'react';
import { CircuitSelector } from '../components/CircuitSelector';
import { ControlsPanel } from '../components/ControlsPanel';
import { WaveformPlot } from '../components/WaveformPlot';
import { BodePlot } from '../components/BodePlot';
import { SchematicViewer } from '../components/SchematicViewer';
import { OutputStats } from '../components/OutputStats';
import { generateSignal } from '../logic/signalGenerator';
import { simulateCircuit, generateBodeData } from '../logic/opampModels';
import { Cpu, ArrowLeft, Activity, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Simulator = ({ onNavigate }) => {
  const [circuitType, setCircuitType] = useState('inverting');
  const [plotMode, setPlotMode] = useState('time'); // 'time' or 'bode'
  
  const [params, setParams] = useState({
    preset: 'ideal',
    Rin: 1000,
    Rf: 10000,
    C: 1e-6,
    Vcc: 15,
    slewRate: 20,
    gbwp: 1e9,
    waveform: 'sine',
    freq: 100,
    amplitude: 1,
    offset: 0,
    noiseLevel: 0
  });

  const { inputSignal, vOut, stats, bodeData } = useMemo(() => {
    const inputSignal = generateSignal(params.waveform, params.freq, params.amplitude, params.offset, params.noiseLevel);
    const result = simulateCircuit(circuitType, inputSignal, params);
    const bodeData = generateBodeData(circuitType, params);
    
    return {
      inputSignal,
      vOut: result.vOut,
      bodeData,
      stats: {
        isClipping: result.isClipping,
        isSlewRateLimited: result.isSlewRateLimited,
        peakVoltage: result.peakVoltage,
        idealGain: result.idealGain
      }
    };
  }, [circuitType, params]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent text-text-main p-4 md:p-8 font-sans selection:bg-primary/30"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-hover"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/20 rounded-xl relative group">
              <div className="absolute inset-0 bg-primary/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Cpu className="w-8 h-8 text-primary relative z-10" />
            </div>
            {/* Header Text removed per user request, keeping only logo */}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-muted bg-surface hover:bg-surface-hover hover:text-text-main rounded-lg transition-colors border border-surface-hover cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </motion.button>
        </motion.header>

        {/* Main Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* Left Panel: Controls */}
          <div className="lg:col-span-4 space-y-6 flex flex-col">
            <CircuitSelector selected={circuitType} onChange={setCircuitType} />
            <ControlsPanel params={params} setParams={setParams} circuitType={circuitType} />
          </div>
          
          {/* Right Panel: Visualization & Stats */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <OutputStats stats={stats} />
            
            <SchematicViewer circuitType={circuitType} />
            
            <div className="flex gap-2">
              <button 
                onClick={() => setPlotMode('time')} 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${plotMode === 'time' ? 'bg-primary text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'neu-convex text-text-muted hover:text-text-main'}`}
              >
                <Activity className="w-4 h-4" /> Time Domain
              </button>
              <button 
                onClick={() => setPlotMode('bode')} 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${plotMode === 'bode' ? 'bg-secondary text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'neu-convex text-text-muted hover:text-text-main'}`}
              >
                <LineChart className="w-4 h-4" /> Bode Plot
              </button>
            </div>
            
            {plotMode === 'time' ? (
              <WaveformPlot inputSignal={inputSignal} vOut={vOut} />
            ) : (
              <BodePlot bodeData={bodeData} />
            )}
            
          </div>

        </motion.div>

      </div>
    </motion.div>
  );
};

import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const WaveformPlot = ({ inputSignal, vOut }) => {
  const data = useMemo(() => {
    if (!inputSignal || !vOut) return [];
    return inputSignal.time.map((t, i) => ({
      time: (t * 1000).toFixed(2), // ms
      vin: Number(inputSignal.voltage[i].toFixed(3)),
      vout: Number(vOut[i].toFixed(3))
    }));
  }, [inputSignal, vOut]);

  return (
    <div className="neu-flat p-4 rounded-3xl h-[400px] w-full flex flex-col border-none">
      <h2 className="text-lg font-semibold text-text-main mb-4">Waveform Oscilloscope</h2>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-hover)" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="var(--color-text-muted)" 
              tick={{fill: 'var(--color-text-muted)', fontSize: 12}} 
              tickLine={false} 
              axisLine={false} 
              label={{ value: 'Time (ms)', position: 'insideBottomRight', offset: -15, fill: 'var(--color-text-muted)', fontSize: 12 }} 
            />
            <YAxis 
              stroke="var(--color-text-muted)" 
              tick={{fill: 'var(--color-text-muted)', fontSize: 12}} 
              tickLine={false} 
              axisLine={false} 
              label={{ value: 'Voltage (V)', angle: -90, position: 'insideLeft', fill: 'var(--color-text-muted)', fontSize: 12, offset: 15 }} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-surface-hover)', borderRadius: '8px', color: 'var(--color-text-main)' }}
              itemStyle={{ color: 'var(--color-text-main)' }}
              labelStyle={{ color: 'var(--color-text-muted)', marginBottom: '4px' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line type="monotone" dataKey="vin" name="Input (Vin)" stroke="var(--color-primary)" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="vout" name="Output (Vout)" stroke="var(--color-accent)" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

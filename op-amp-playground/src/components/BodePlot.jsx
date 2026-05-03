import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const BodePlot = ({ bodeData }) => {
  return (
    <div className="neu-flat p-4 rounded-3xl h-[400px] w-full flex flex-col border-none">
      <h2 className="text-lg font-semibold text-text-main mb-4">Frequency Response (Bode Plot)</h2>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={bodeData} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-hover)" />
            <XAxis 
              dataKey="frequency" 
              scale="log" 
              domain={['auto', 'auto']}
              type="number"
              stroke="var(--color-text-muted)" 
              tick={{fill: 'var(--color-text-muted)', fontSize: 12}}
              tickFormatter={(val) => {
                if (val >= 1e6) return `${val/1e6}M`;
                if (val >= 1e3) return `${val/1e3}k`;
                return val;
              }}
              label={{ value: 'Frequency (Hz)', position: 'insideBottomRight', offset: -15, fill: 'var(--color-text-muted)', fontSize: 12 }} 
            />
            <YAxis 
              stroke="var(--color-text-muted)" 
              tick={{fill: 'var(--color-text-muted)', fontSize: 12}}
              label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft', fill: 'var(--color-text-muted)', fontSize: 12, offset: 15 }} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-surface-hover)', borderRadius: '8px', color: 'var(--color-text-main)' }}
              labelFormatter={(label) => `Freq: ${Number(label).toExponential(2)} Hz`}
              formatter={(value) => [`${value} dB`, 'Magnitude']}
            />
            <Line type="monotone" dataKey="magnitudeDb" stroke="var(--color-secondary)" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

import React from 'react';

export const SchematicViewer = ({ circuitType }) => {
  return (
    <div className="neu-flat p-4 rounded-2xl border-none flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
      <div className="absolute top-4 left-4 text-sm font-semibold text-text-muted">Circuit Layout</div>
      
      {circuitType === 'inverting' && (
        <svg width="300" height="150" viewBox="0 0 300 150" fill="none" stroke="var(--color-primary)" strokeWidth="3" className="mt-4">
          <path d="M 150 75 L 200 50 L 200 100 Z" fill="var(--color-surface)" /> {/* OpAmp */}
          <text x="160" y="70" stroke="none" fill="var(--color-text-main)" fontSize="20">-</text>
          <text x="160" y="90" stroke="none" fill="var(--color-text-main)" fontSize="20">+</text>
          
          <path d="M 20 65 L 150 65" /> {/* Vin to - */}
          <path d="M 85 55 L 85 75 M 95 55 L 95 75 M 105 55 L 105 75" /> {/* Resistor Rin */}
          <text x="80" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rin</text>
          
          <path d="M 130 65 L 130 20 L 220 20 L 220 75" /> {/* Feedback Loop */}
          <path d="M 165 10 L 165 30 M 175 10 L 175 30 M 185 10 L 185 30" /> {/* Resistor Rf */}
          <text x="165" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rf</text>

          <path d="M 150 85 L 120 85 L 120 120 M 110 120 L 130 120 M 115 125 L 125 125" /> {/* Ground on + */}

          <path d="M 200 75 L 280 75" /> {/* Vout */}
          <text x="250" y="65" stroke="none" fill="var(--color-accent)" fontSize="14">Vout</text>
          <text x="20" y="55" stroke="none" fill="var(--color-secondary)" fontSize="14">Vin</text>
        </svg>
      )}

      {circuitType === 'non-inverting' && (
        <svg width="300" height="150" viewBox="0 0 300 150" fill="none" stroke="var(--color-primary)" strokeWidth="3" className="mt-4">
          <path d="M 150 75 L 200 50 L 200 100 Z" fill="var(--color-surface)" /> {/* OpAmp */}
          <text x="160" y="70" stroke="none" fill="var(--color-text-main)" fontSize="20">-</text>
          <text x="160" y="90" stroke="none" fill="var(--color-text-main)" fontSize="20">+</text>
          
          <path d="M 20 85 L 150 85" /> {/* Vin to + */}
          <text x="20" y="75" stroke="none" fill="var(--color-secondary)" fontSize="14">Vin</text>

          <path d="M 150 65 L 120 65 L 120 120 M 110 120 L 130 120 M 115 125 L 125 125" /> {/* Ground on - through Rin */}
          <path d="M 110 90 L 130 90 M 110 100 L 130 100" /> {/* Resistor Rin */}
          <text x="75" y="100" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rin</text>
          
          <path d="M 120 65 L 120 20 L 220 20 L 220 75" /> {/* Feedback Loop */}
          <path d="M 165 10 L 165 30 M 175 10 L 175 30 M 185 10 L 185 30" /> {/* Resistor Rf */}
          <text x="165" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rf</text>

          <path d="M 200 75 L 280 75" /> {/* Vout */}
          <text x="250" y="65" stroke="none" fill="var(--color-accent)" fontSize="14">Vout</text>
        </svg>
      )}

      {circuitType === 'integrator' && (
        <svg width="300" height="150" viewBox="0 0 300 150" fill="none" stroke="var(--color-primary)" strokeWidth="3" className="mt-4">
          <path d="M 150 75 L 200 50 L 200 100 Z" fill="var(--color-surface)" /> {/* OpAmp */}
          <text x="160" y="70" stroke="none" fill="var(--color-text-main)" fontSize="20">-</text>
          <text x="160" y="90" stroke="none" fill="var(--color-text-main)" fontSize="20">+</text>
          
          <path d="M 20 65 L 150 65" /> {/* Vin to - */}
          <path d="M 85 55 L 85 75 M 95 55 L 95 75 M 105 55 L 105 75" /> {/* Resistor Rin */}
          <text x="80" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rin</text>
          
          <path d="M 130 65 L 130 20 L 220 20 L 220 75" /> {/* Feedback Loop */}
          <path d="M 170 10 L 170 30 M 180 10 L 180 30" /> {/* Capacitor C */}
          <text x="170" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">C</text>

          <path d="M 150 85 L 120 85 L 120 120 M 110 120 L 130 120 M 115 125 L 125 125" /> {/* Ground on + */}

          <path d="M 200 75 L 280 75" /> {/* Vout */}
          <text x="250" y="65" stroke="none" fill="var(--color-accent)" fontSize="14">Vout</text>
          <text x="20" y="55" stroke="none" fill="var(--color-secondary)" fontSize="14">Vin</text>
        </svg>
      )}

      {circuitType === 'differentiator' && (
        <svg width="300" height="150" viewBox="0 0 300 150" fill="none" stroke="var(--color-primary)" strokeWidth="3" className="mt-4">
          <path d="M 150 75 L 200 50 L 200 100 Z" fill="var(--color-surface)" /> {/* OpAmp */}
          <text x="160" y="70" stroke="none" fill="var(--color-text-main)" fontSize="20">-</text>
          <text x="160" y="90" stroke="none" fill="var(--color-text-main)" fontSize="20">+</text>
          
          <path d="M 20 65 L 150 65" /> {/* Vin to - */}
          <path d="M 90 55 L 90 75 M 100 55 L 100 75" /> {/* Capacitor C */}
          <text x="85" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">C</text>
          
          <path d="M 130 65 L 130 20 L 220 20 L 220 75" /> {/* Feedback Loop */}
          <path d="M 165 10 L 165 30 M 175 10 L 175 30 M 185 10 L 185 30" /> {/* Resistor Rf */}
          <text x="165" y="45" stroke="none" fill="var(--color-text-muted)" fontSize="14">Rf</text>

          <path d="M 150 85 L 120 85 L 120 120 M 110 120 L 130 120 M 115 125 L 125 125" /> {/* Ground on + */}

          <path d="M 200 75 L 280 75" /> {/* Vout */}
          <text x="250" y="65" stroke="none" fill="var(--color-accent)" fontSize="14">Vout</text>
          <text x="20" y="55" stroke="none" fill="var(--color-secondary)" fontSize="14">Vin</text>
        </svg>
      )}
    </div>
  );
};

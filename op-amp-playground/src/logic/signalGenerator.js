export const generateSignal = (type, freq, amplitude, offset, noiseLevel = 0, numSamples = 1000) => {
  const time = [];
  const voltage = [];
  
  const T = 1 / freq;
  const tTotal = 3 * T;
  const dt = tTotal / numSamples;

  for (let i = 0; i <= numSamples; i++) {
    const t = i * dt;
    time.push(t);
    
    let v = 0;
    if (type === 'sine') {
      v = amplitude * Math.sin(2 * Math.PI * freq * t);
    } else if (type === 'square') {
      v = Math.sin(2 * Math.PI * freq * t) >= 0 ? amplitude : -amplitude;
    } else if (type === 'triangle') {
      v = (2 * amplitude / Math.PI) * Math.asin(Math.sin(2 * Math.PI * freq * t));
    }
    
    // Inject Noise
    const noise = noiseLevel > 0 ? (Math.random() * 2 - 1) * noiseLevel * amplitude : 0;
    
    voltage.push(v + offset + noise);
  }
  
  return { time, voltage, dt };
};


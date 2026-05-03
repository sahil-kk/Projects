export const simulateCircuit = (circuitType, inputSignal, params) => {
  const { time, voltage: vIn, dt } = inputSignal;
  const { Rin, Rf, C, Vcc, slewRate, gbwp } = params; // slewRate in V/us, gbwp in Hz
  
  const vOut = [];
  // Max change in voltage per dt step: slewRate (V/us) * 1e6 (us/s) * dt (s)
  const maxSlew = slewRate * 1e6 * dt; 
  
  // Calculate single-pole GBWP low-pass filter
  // Approx noise gain:
  const noiseGain = (circuitType === 'inverting' || circuitType === 'non-inverting') ? 1 + (Rf / Rin) : 10;
  const f_c = gbwp ? gbwp / noiseGain : 1e9; // if no gbwp given, assume very high
  const alpha = dt / (1 / (2 * Math.PI * f_c) + dt);
  
  let prevVout = 0;
  let prevVFiltered = 0;
  let integral = 0;
  
  let isClipping = false;
  let isSlewRateLimited = false;
  let peakVoltage = 0;
  
  for (let i = 0; i < time.length; i++) {
    const vi = vIn[i];
    let vIdeal = 0;
    
    switch (circuitType) {
      case 'inverting':
        vIdeal = -(Rf / Rin) * vi;
        break;
      case 'non-inverting':
        vIdeal = (1 + (Rf / Rin)) * vi;
        break;
      case 'integrator':
        // Vo(t) = -(1/RC) \int Vi(t) dt
        integral += vi * dt;
        vIdeal = -(1 / (Rin * C)) * integral;
        break;
      case 'differentiator':
        // Vo(t) = -RC dVi/dt
        if (i === 0) {
          vIdeal = 0;
        } else {
          const dVi = vi - vIn[i - 1];
          // Rf is feedback resistor, C is input capacitor
          vIdeal = -Rf * C * (dVi / dt);
        }
        break;
      default:
        vIdeal = 0;
    }
    
    // Apply GBWP Bandwidth Limit (Low Pass Filter)
    const vFiltered = alpha * vIdeal + (1 - alpha) * prevVFiltered;
    prevVFiltered = vFiltered;

    // Apply clipping (Saturation)
    let vClamped = vFiltered;
    if (vFiltered > Vcc) {
      vClamped = Vcc;
      isClipping = true;
    } else if (vFiltered < -Vcc) {
      vClamped = -Vcc;
      isClipping = true;
    }
    
    // Apply slew rate limiting
    let vActual = vClamped;
    if (i > 0) {
      const dV = vClamped - prevVout;
      if (dV > maxSlew) {
        vActual = prevVout + maxSlew;
        isSlewRateLimited = true;
      } else if (dV < -maxSlew) {
        vActual = prevVout - maxSlew;
        isSlewRateLimited = true;
      }
    }
    
    vOut.push(vActual);
    prevVout = vActual;
    
    if (Math.abs(vActual) > peakVoltage) {
      peakVoltage = Math.abs(vActual);
    }
  }
  
  // Calculate ideal gain depending on circuit type
  let idealGain = 0;
  if (circuitType === 'inverting') idealGain = -Rf / Rin;
  if (circuitType === 'non-inverting') idealGain = 1 + (Rf / Rin);
  if (circuitType === 'integrator') idealGain = 'Freq. Dependent';
  if (circuitType === 'differentiator') idealGain = 'Freq. Dependent';
  
  return { vOut, isClipping, isSlewRateLimited, peakVoltage, idealGain };
};

export const generateBodeData = (circuitType, params) => {
  const { Rin, Rf, C, gbwp } = params;
  const data = [];
  
  // Approx noise gain for GBWP corner
  const noiseGain = (circuitType === 'inverting' || circuitType === 'non-inverting') ? 1 + (Rf / Rin) : 10;
  const fc_opamp = gbwp ? gbwp / noiseGain : 1e9;

  // Log sweep from 1Hz to 10MHz (7 decades)
  for (let i = 0; i <= 100; i++) {
    // scale 0-100 to 10^0 to 10^7
    const f = Math.pow(10, 7 * (i / 100));
    const w = 2 * Math.PI * f;
    
    let magDb = 0;
    
    // Ideal Gain magnitude
    if (circuitType === 'inverting') {
      magDb = 20 * Math.log10(Rf / Rin);
    } else if (circuitType === 'non-inverting') {
      magDb = 20 * Math.log10(1 + Rf / Rin);
    } else if (circuitType === 'integrator') {
      magDb = 20 * Math.log10(1 / (w * Rin * C));
    } else if (circuitType === 'differentiator') {
      magDb = 20 * Math.log10(w * Rf * C);
    }
    
    // Apply opamp GBWP roll-off (-20dB/dec)
    const opampRollOff = 20 * Math.log10(1 / Math.sqrt(1 + Math.pow(f / fc_opamp, 2)));
    magDb += opampRollOff;
    
    // Clamp to realistic limits
    if (magDb < -60) magDb = -60;
    if (magDb > 100) magDb = 100;
    
    data.push({ frequency: f, magnitudeDb: Number(magDb.toFixed(2)) });
  }
  
  return data;
};

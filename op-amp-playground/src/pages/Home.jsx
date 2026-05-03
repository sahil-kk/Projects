import React from 'react';
import { Cpu, ArrowRight, Zap, Activity, Waves, Code, Settings2, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

import { ShinyButton } from '../components/ui/ShinyButton';

export const Home = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen text-text-main font-sans selection:bg-primary/30 bg-transparent">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 pt-20 z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="neu-flat p-6 rounded-3xl relative group border-none"
            >
              <div className="absolute inset-0 rounded-3xl bg-primary/20 animate-pulse blur-xl group-hover:bg-secondary/30 transition-colors duration-500"></div>
              <Cpu className="w-20 h-20 text-primary relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            </motion.div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Op-Amp Circuit
            </span>
            <br /> Playground
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mt-6">
            Interactive simulation and visualization of operational amplifiers. Build, tweak, and observe real-time waveforms for inverting, non-inverting, integrator, and differentiator circuits.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center pt-8">
            <ShinyButton onClick={() => onNavigate('simulator')}>
              Launch Simulator <ArrowRight className="w-5 h-5 ml-1" />
            </ShinyButton>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-accent" />}
              title="Real-time Simulation"
              description="Adjust resistor and capacitor values on the fly to instantly see how the output waveform responds."
            />
            <FeatureCard 
              icon={<Activity className="w-6 h-6 text-primary" />}
              title="Non-Ideal Modeling"
              description="Experience real-world limitations like saturation clipping and slew rate limits dynamically."
            />
            <FeatureCard 
              icon={<Waves className="w-6 h-6 text-secondary" />}
              title="Multiple Waveforms"
              description="Test your circuits against sine, square, and triangle waves to observe differentiating and integrating effects."
            />
          </motion.div>

        </motion.div>
      </section>

      {/* Deep Dive Section */}
      <section className="relative py-32 bg-surface/20 border-y border-surface-hover/30 z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-text-main">
              Four Architectures. <span className="text-primary">Infinite Possibilities.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you are brushing up on analog electronics or testing complex differential math, our real-time engine numerically solves the circuit equations at every time step.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CircuitCard 
              title="Inverting Amplifier" 
              formula="Vout = -(Rf / Rin) * Vin"
              desc="Produces an output signal that is exactly 180° out of phase with the input, commonly used for signal scaling." 
              delay={0.1}
            />
            <CircuitCard 
              title="Non-Inverting Amplifier" 
              formula="Vout = (1 + Rf / Rin) * Vin"
              desc="Produces an amplified output signal that remains in phase with the input signal, ideal for high-impedance buffering." 
              delay={0.2}
            />
            <CircuitCard 
              title="Active Integrator" 
              formula="Vout = -(1/RC) ∫ Vin dt"
              desc="Performs the mathematical operation of integration over time. Feed it a square wave to get a triangle wave!" 
              delay={0.3}
            />
            <CircuitCard 
              title="Active Differentiator" 
              formula="Vout = -RC (dVin/dt)"
              desc="Produces an output voltage proportional to the rate of change of the input. Excellent for high-pass filtering." 
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="relative py-32 z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for Precision</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              We go beyond ideal models. Toggle physical limitations to see how real op-amps behave under extreme conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl neu-pressed border-none flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold">Rail Saturation</h4>
              <p className="text-text-muted text-sm px-4">Watch the signal clip when the gain pushes the voltage beyond the physical supply rails (±Vcc).</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl neu-pressed border-none flex items-center justify-center">
                <Settings2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold">Slew Rate Limits</h4>
              <p className="text-text-muted text-sm px-4">Observe triangle distortion on high-frequency square waves when the op-amp can't slew fast enough.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl neu-pressed border-none flex items-center justify-center">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold">Dynamic Charts</h4>
              <p className="text-text-muted text-sm px-4">60FPS smooth Recharts rendering allows you to drag sliders and instantly see the waveform shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative overflow-hidden z-10 border-t border-surface-hover/30">
        <div className="absolute inset-0 bg-primary/10 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center px-4 md:px-8 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to hit the lab?</h2>
          <p className="text-xl text-text-muted mb-10">No breadboard required. Jump into the playground right now.</p>
          <ShinyButton onClick={() => onNavigate('simulator')}>
            Open Playground <ArrowRight className="w-5 h-5 ml-2" />
          </ShinyButton>
        </motion.div>
      </section>
      
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="neu-flat p-6 rounded-2xl transition-colors group cursor-default border-none"
  >
    <div className="w-12 h-12 neu-pressed rounded-xl flex items-center justify-center mb-4 border-none group-hover:scale-110 group-hover:rotate-6 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-text-main">{title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const CircuitCard = ({ title, formula, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
    className="neu-convex p-8 rounded-3xl transition-all group border-none hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
  >
    <h3 className="text-2xl font-bold mb-3 text-text-main group-hover:text-secondary transition-colors">{title}</h3>
    <div className="mb-4 inline-block px-3 py-1 rounded-md neu-pressed border-none">
      <code className="text-primary font-mono text-sm">{formula}</code>
    </div>
    <p className="text-text-muted leading-relaxed">{desc}</p>
  </motion.div>
);

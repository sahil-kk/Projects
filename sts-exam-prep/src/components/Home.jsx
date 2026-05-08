import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/quizData';
import { Award, ChevronRight, BookOpen, Sun, Moon, Zap, Target, Github, Mail, MessageCircle } from 'lucide-react';
import BackgroundGrid from './ui/BackgroundGrid';

export default function Home({ userName, completedModules, quizHistory, isDarkMode, onToggleTheme, onSelectCategory }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden flex flex-col items-center py-12 md:py-20 px-6">
      <BackgroundGrid />
      
      <div className="max-w-6xl w-full z-10 space-y-16">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm tracking-wide shadow-[0_0_15px_rgba(var(--primary),0.2)] mb-2">
              Ready to crush your exam?
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground pb-2">
              Welcome back,<br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-cyan-400">
                {userName}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              Select a module from your syllabus below to begin mastering your skills.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onToggleTheme} 
            className="p-4 bg-card/80 backdrop-blur-md border border-border text-foreground rounded-2xl hover:bg-secondary transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
          >
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
          </motion.button>
        </div>

        {/* Mock Exam Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden p-[2px] group shadow-2xl hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-shadow duration-500"
        >
          {/* React Bits Border Glow Animation */}
          <div 
            className="absolute inset-[-1000%] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
              background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)',
              animation: 'spin 4s linear infinite' 
            }} 
          />
          
          <button
            onClick={() => onSelectCategory({ id: 'mock', title: 'Full Mock Exam' })}
            className="w-full text-left rounded-[calc(2.5rem-2px)] bg-background relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/30">
                  <Zap size={24} fill="currentColor" />
                </div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Challenge Mode</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Full Mock Exam</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Test your knowledge across all 7 modules. 50 perfectly balanced questions designed to simulate the real exam environment.
              </p>
            </div>
            <div className="mt-8 md:mt-0 relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/40 flex-shrink-0">
              <ChevronRight size={32} />
            </div>
          </button>
        </motion.div>

        {/* Bento Grid for Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Target className="mr-3 text-primary" size={28} /> 
            Study Modules
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-6"
          >
            {categories.map((category) => {
              const isCompleted = completedModules.includes(category.id);
              
              return (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectCategory(category)}
                  className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[200px] ${
                    isCompleted 
                      ? 'border-primary/40 bg-gradient-to-br from-primary/10 to-background shadow-[0_0_20px_rgba(var(--primary),0.1)] hover:shadow-[0_0_30px_rgba(var(--primary),0.25)]' 
                      : 'border-border/60 bg-gradient-to-br from-card/80 to-background backdrop-blur-xl hover:border-primary/50 shadow-md hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className={`p-4 rounded-2xl backdrop-blur-md border ${
                      isCompleted 
                        ? 'bg-primary/20 text-primary border-primary/20 shadow-inner' 
                        : 'bg-secondary/80 text-muted-foreground border-border group-hover:bg-primary/10 group-hover:text-primary transition-colors'
                    }`}>
                      <BookOpen size={28} />
                    </div>
                    {isCompleted && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                      >
                        <Award size={36} fill="currentColor" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="relative z-10 mt-6">
                    <h3 className="text-lg md:text-xl font-bold leading-snug mb-3 pr-4 group-hover:text-primary transition-colors">{category.title}</h3>
                    <div className="flex items-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors translate-y-2 opacity-80 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                      Start Practicing <ChevronRight size={18} className="ml-1" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-8 pb-4 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground"
        >
          <div>
            <p>© {new Date().getFullYear()} STS Exam Prep. Build with ❤️</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://wa.me/919188776434" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center">
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>
            <a href="mailto:hello@sahilkk.site" className="hover:text-primary transition-colors flex items-center">
              <Mail size={20} className="mr-2" />
              Mail
            </a>
            <a href="https://github.com/sahil-kk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center">
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

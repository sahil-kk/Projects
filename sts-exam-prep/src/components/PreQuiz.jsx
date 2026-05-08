import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Target, ListFilter } from 'lucide-react';

export default function PreQuiz({ category, availableSubtopics = [], onBack, onStart }) {
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [mode, setMode] = useState(category?.id === 'mock' ? 'exam' : 'practice'); // 'practice' | 'exam'
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);

  const toggleSubtopic = (sub) => {
    if (selectedSubtopics.includes(sub)) {
      setSelectedSubtopics(selectedSubtopics.filter(s => s !== sub));
    } else {
      setSelectedSubtopics([...selectedSubtopics, sub]);
    }
  };

  const selectAll = () => setSelectedSubtopics([]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-card border border-border rounded-3xl p-8 shadow-xl"
      >
        <button 
          onClick={onBack}
          className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Modules
        </button>

        <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
        <p className="text-muted-foreground mb-8">Configure your session before starting.</p>

        <div className="space-y-8">
          
          {/* Subtopic Selection */}
          {availableSubtopics.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center"><ListFilter size={20} className="mr-2"/> Topics to Cover</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={selectAll}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${selectedSubtopics.length === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground border-border hover:border-primary/50'}`}
                >
                  All Topics
                </button>
                {availableSubtopics.map(sub => (
                  <button
                    key={sub}
                    onClick={() => toggleSubtopic(sub)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${selectedSubtopics.includes(sub) ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground border-border hover:border-primary/50'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Timer Toggle */}
          <div className="flex items-center justify-between p-4 bg-secondary rounded-2xl">
            <div className="flex items-center">
              <Clock className="text-primary mr-3" size={24} />
              <div>
                <h4 className="font-semibold">Timer</h4>
                <p className="text-sm text-muted-foreground">Add a time limit (1 min/question)</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={timerEnabled}
                onChange={() => setTimerEnabled(!timerEnabled)}
              />
              <div className="w-14 h-7 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          {/* Mode Selection */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center"><Target size={20} className="mr-2"/> Feedback Mode</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setMode('practice')}
                className={`p-4 rounded-2xl border text-left transition-all ${mode === 'practice' ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-muted-foreground'}`}
              >
                <div className="font-bold mb-1">Practice Mode</div>
                <div className="text-sm text-muted-foreground">See correct answers immediately after each question.</div>
              </button>
              <button
                onClick={() => setMode('exam')}
                className={`p-4 rounded-2xl border text-left transition-all ${mode === 'exam' ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-muted-foreground'}`}
              >
                <div className="font-bold mb-1">Exam Mode</div>
                <div className="text-sm text-muted-foreground">Hide all feedback until the very end of the module.</div>
              </button>
            </div>
          </div>

          <button
            onClick={() => onStart({ timerEnabled, mode, selectedSubtopics })}
            className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-opacity mt-8"
          >
            Begin {mode === 'exam' ? 'Exam' : 'Practice'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

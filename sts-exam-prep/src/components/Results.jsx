import React from 'react';
import { motion } from 'framer-motion';
import { Award, AlertTriangle, Home, RotateCcw } from 'lucide-react';

export default function Results({ category, answers, onHome, onReview }) {
  const total = answers.length;
  const correct = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correct / total) * 100);

  // Weak area analysis
  const subtopicStats = answers.reduce((acc, curr) => {
    if (!acc[curr.subtopic]) {
      acc[curr.subtopic] = { total: 0, correct: 0 };
    }
    acc[curr.subtopic].total += 1;
    if (curr.isCorrect) acc[curr.subtopic].correct += 1;
    return acc;
  }, {});

  let weakArea = null;
  let lowestScore = 1; // 100%

  Object.entries(subtopicStats).forEach(([subtopic, stats]) => {
    const score = stats.correct / stats.total;
    if (score < lowestScore) {
      lowestScore = score;
      weakArea = subtopic;
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-card border border-border rounded-3xl p-8 shadow-xl text-center"
      >
        <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Award size={48} />
        </div>
        
        <h2 className="text-4xl font-bold mb-2">Module Completed!</h2>
        <p className="text-xl text-muted-foreground mb-8">{category.title}</p>

        <div className="flex justify-center gap-8 mb-8">
          <div className="p-6 bg-secondary rounded-2xl flex-1 max-w-[200px]">
            <div className="text-5xl font-black text-primary mb-2">{percentage}%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Score</div>
          </div>
          <div className="p-6 bg-secondary rounded-2xl flex-1 max-w-[200px]">
            <div className="text-5xl font-black mb-2">{correct}/{total}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Correct</div>
          </div>
        </div>

        {weakArea && lowestScore < 1 && (
          <div className="mb-10 p-4 border border-destructive/50 bg-destructive/10 rounded-2xl flex items-start text-left">
            <AlertTriangle className="text-destructive mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-destructive">Area for Improvement: {weakArea}</h4>
              <p className="text-sm text-foreground/80">You dropped the most points in this subtopic. Consider reviewing your notes on {weakArea} before the final exam.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={onReview}
            className="flex items-center justify-center py-4 px-6 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5 transition-colors"
          >
            <RotateCcw size={20} className="mr-2" /> Review Mistakes
          </button>
          <button
            onClick={onHome}
            className="flex items-center justify-center py-4 px-6 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity"
          >
            <Home size={20} className="mr-2" /> Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}

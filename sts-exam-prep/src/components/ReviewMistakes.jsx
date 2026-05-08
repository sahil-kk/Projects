import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

export default function ReviewMistakes({ answers, onBack }) {
  const mistakes = answers.filter(a => !a.isCorrect);

  if (mistakes.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Perfect Score!</h2>
        <p className="text-muted-foreground mb-8">You didn't make any mistakes in this module.</p>
        <button onClick={onBack} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={20} className="mr-2" /> Back to Results
        </button>
        
        <h1 className="text-3xl font-bold mb-8">Review Mistakes</h1>

        <div className="space-y-8">
          {mistakes.map((m, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-card border border-border rounded-3xl p-6 md:p-8"
            >
              <div className="text-sm text-primary font-semibold mb-2">{m.subtopic}</div>
              <h3 className="text-xl font-medium mb-6">{m.question}</h3>
              
              <div className="space-y-3">
                {m.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === m.correct;
                  const isSelected = oIdx === m.selected;
                  
                  let bgClass = "bg-secondary";
                  let borderClass = "border-transparent";
                  let Icon = null;

                  if (isCorrect) {
                    bgClass = "bg-green-500/10";
                    borderClass = "border-green-500";
                    Icon = <CheckCircle2 size={20} className="text-green-500" />;
                  } else if (isSelected) {
                    bgClass = "bg-destructive/10";
                    borderClass = "border-destructive";
                    Icon = <XCircle size={20} className="text-destructive" />;
                  }

                  return (
                    <div key={oIdx} className={`p-4 rounded-xl border flex justify-between items-center ${bgClass} ${borderClass}`}>
                      <span className={isCorrect ? 'text-green-500 font-medium' : isSelected ? 'text-destructive font-medium' : ''}>
                        {opt}
                      </span>
                      {Icon}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-start text-primary">
                <Lightbulb className="mr-3 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Explanation</h4>
                  <p className="text-sm opacity-90">{m.explanation || "No detailed explanation available for this question. The correct answer is highlighted in green above."}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

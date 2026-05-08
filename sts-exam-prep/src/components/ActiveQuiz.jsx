import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, XCircle, Bookmark } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function ActiveQuiz({ questions, settings, onComplete, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(questions.length * 60); // 1 min per question

  const currentQ = questions[currentIndex];
  const [bookmarkedIds, setBookmarkedIds] = useState(() => JSON.parse(localStorage.getItem('sts_bookmarks') || '[]'));

  useEffect(() => {
    localStorage.setItem('sts_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    if (!settings.timerEnabled || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [settings.timerEnabled, timeLeft]);

  useEffect(() => {
    if (settings.timerEnabled && timeLeft <= 0) {
      handleComplete();
    }
  }, [timeLeft]);

  const handleSelect = (index) => {
    if (isAnswered) return;
    sounds.playClick();
    setSelectedOption(index);
    if (settings.mode === 'practice') {
      setIsAnswered(true);
      if (index === currentQ.correctAnswer) {
        sounds.playCorrect();
      } else {
        sounds.playWrong();
      }
    }
  };

  const toggleBookmark = () => {
    setBookmarkedIds(prev => 
      prev.includes(currentQ.id) 
        ? prev.filter(id => id !== currentQ.id)
        : [...prev, currentQ.id]
    );
  };

  const handleNext = () => {
    // Save answer
    const isCorrect = selectedOption === currentQ.correctAnswer;
    const newAnswers = [...answers, {
      questionId: currentQ.id,
      subtopic: currentQ.subtopic,
      selected: selectedOption,
      correct: currentQ.correctAnswer,
      isCorrect,
      question: currentQ.question,
      options: currentQ.options
    }];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      handleComplete(newAnswers);
    }
  };

  const handleComplete = (finalAnswers = answers) => {
    onComplete(finalAnswers);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-3xl flex justify-between items-center mb-8">
        <button onClick={onQuit} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
          Quit
        </button>
        {settings.timerEnabled && (
          <div className={`flex items-center font-mono text-lg font-bold px-4 py-2 rounded-xl ${timeLeft < 60 ? 'bg-destructive/10 text-destructive' : 'bg-secondary text-foreground'}`}>
            <Clock size={20} className="mr-2" />
            {formatTime(timeLeft)}
          </div>
        )}
      </div>

      <div className="w-full max-w-3xl mb-4 flex gap-2">
        {questions.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 flex-1 rounded-full ${idx < currentIndex ? 'bg-primary' : idx === currentIndex ? 'bg-primary/50' : 'bg-secondary'}`}
          />
        ))}
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full max-w-3xl bg-card border border-border rounded-3xl p-6 md:p-10 shadow-lg"
      >
        <div className="mb-8 flex justify-between items-start">
          <div>
            <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{currentQ.subtopic} • Question {currentIndex + 1} of {questions.length}</div>
            <h2 className="text-2xl md:text-3xl font-medium leading-tight">{currentQ.question}</h2>
          </div>
          <button 
            onClick={toggleBookmark}
            className={`p-3 rounded-full transition-colors ml-4 flex-shrink-0 ${bookmarkedIds.includes(currentQ.id) ? 'bg-yellow-500/20 text-yellow-500' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
          >
            <Bookmark size={24} fill={bookmarkedIds.includes(currentQ.id) ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQ.correctAnswer;
            let btnClass = "border-border bg-background hover:border-primary/50";
            
            if (isSelected) {
              btnClass = "border-primary bg-primary/10 text-primary";
            }

            if (settings.mode === 'practice' && isAnswered) {
              if (isCorrectOption) {
                btnClass = "border-green-500 bg-green-500/10 text-green-500";
              } else if (isSelected && !isCorrectOption) {
                btnClass = "border-destructive bg-destructive/10 text-destructive";
              } else {
                btnClass = "border-border bg-background opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex justify-between items-center ${btnClass}`}
              >
                <span className="text-lg">{option}</span>
                {settings.mode === 'practice' && isAnswered && (
                  isCorrectOption ? <CheckCircle2 size={24} className="text-green-500" /> : 
                  (isSelected ? <XCircle size={24} className="text-destructive" /> : null)
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end min-h-[60px]">
          <AnimatePresence>
            {(selectedOption !== null || isAnswered) && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={handleNext}
                className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-opacity"
              >
                {currentIndex === questions.length - 1 ? 'Finish Module' : 'Next Question'}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

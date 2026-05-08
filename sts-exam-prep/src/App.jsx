import React, { useState, useEffect } from 'react';
import NamePrompt from './components/NamePrompt';
import Home from './components/Home';
import PreQuiz from './components/PreQuiz';
import ActiveQuiz from './components/ActiveQuiz';
import Results from './components/Results';
import ReviewMistakes from './components/ReviewMistakes';
import { quizData } from './data/quizData';


export default function App() {
  const [userName, setUserName] = useState('');
  const [completedModules, setCompletedModules] = useState([]);
  const [currentView, setCurrentView] = useState('prompt'); // prompt, home, prequiz, active, results, review
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [quizHistory, setQuizHistory] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizSettings, setQuizSettings] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    const savedName = localStorage.getItem('sts_userName');
    const savedModules = JSON.parse(localStorage.getItem('sts_completedModules') || '[]');
    const savedTheme = localStorage.getItem('sts_darkMode');
    const savedHistory = JSON.parse(localStorage.getItem('sts_quizHistory') || '[]');

    if (savedTheme !== null) setIsDarkMode(savedTheme === 'true');
    setQuizHistory(savedHistory);
    setCompletedModules(savedModules);

    if (savedName) {
      setUserName(savedName);
      setCurrentView('home');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('sts_darkMode', newTheme);
  };

  const handleNameSubmit = (name) => {
    localStorage.setItem('sts_userName', name);
    setUserName(name);
    setCurrentView('home');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentView('prequiz');
  };

  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleStartQuiz = (settings) => {
    setQuizSettings(settings);

    let rawQuestions = [];

    if (selectedCategory.id === 'mock') {
      // Mock Exam: 50 questions, 7 per module (49) + 1 random
      const moduleKeys = Object.keys(quizData);
      const questionsPerModule = Math.floor(50 / moduleKeys.length); // 7
      let unusedQuestions = [];

      moduleKeys.forEach(key => {
        const shuffledModule = shuffleArray(quizData[key]);
        rawQuestions.push(...shuffledModule.slice(0, questionsPerModule));
        unusedQuestions.push(...shuffledModule.slice(questionsPerModule));
      });

      const remainingNeeded = 50 - rawQuestions.length;
      if (remainingNeeded > 0) {
        unusedQuestions = shuffleArray(unusedQuestions);
        rawQuestions.push(...unusedQuestions.slice(0, remainingNeeded));
      }
    } else {
      rawQuestions = quizData[selectedCategory.id] || [];
      if (settings.selectedSubtopics && settings.selectedSubtopics.length > 0) {
        rawQuestions = rawQuestions.filter(q => settings.selectedSubtopics.includes(q.subtopic));
      }
    }

    // Shuffle options and questions
    const processedQuestions = rawQuestions.map(q => {
      const optionsWithIndex = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
      const shuffledOptions = shuffleArray(optionsWithIndex);
      const correctText = typeof q.correctAnswer === 'string' ? q.correctAnswer : q.options[q.correctAnswer];
      const newCorrectIndex = shuffledOptions.findIndex(o => o.text === correctText);

      return {
        ...q,
        options: shuffledOptions.map(o => o.text),
        correctAnswer: newCorrectIndex
      };
    });

    setQuizQuestions(shuffleArray(processedQuestions));
    setCurrentView('active');
  };

  const handleQuizComplete = (answers) => {
    setQuizResults(answers);

    const scorePercentage = Math.round((answers.filter(a => a.isCorrect).length / answers.length) * 100);
    const historyEntry = {
      date: new Date().toISOString(),
      category: selectedCategory.title,
      score: scorePercentage,
      total: answers.length,
      correct: answers.filter(a => a.isCorrect).length
    };

    const newHistory = [historyEntry, ...quizHistory].slice(0, 50); // keep last 50
    setQuizHistory(newHistory);
    localStorage.setItem('sts_quizHistory', JSON.stringify(newHistory));

    // Save badge if passed
    if (selectedCategory.id !== 'mock' && !completedModules.includes(selectedCategory.id)) {
      const updated = [...completedModules, selectedCategory.id];
      setCompletedModules(updated);
      localStorage.setItem('sts_completedModules', JSON.stringify(updated));
    }

    setCurrentView('results');
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} text-foreground bg-background min-h-screen font-sans antialiased`}>
      {currentView === 'prompt' && <NamePrompt onNameSubmit={handleNameSubmit} />}
      {currentView === 'home' && (
        <Home
          userName={userName}
          completedModules={completedModules}
          quizHistory={quizHistory}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onSelectCategory={handleSelectCategory}
        />
      )}
      {currentView === 'prequiz' && (
        <PreQuiz
          category={selectedCategory}
          availableSubtopics={[...new Set((quizData[selectedCategory?.id] || []).map(q => q.subtopic))].filter(Boolean)}
          onBack={() => setCurrentView('home')}
          onStart={handleStartQuiz}
        />
      )}
      {currentView === 'active' && (
        <ActiveQuiz
          questions={quizQuestions}
          settings={quizSettings}
          onComplete={handleQuizComplete}
          onQuit={() => setCurrentView('home')}
        />
      )}
      {currentView === 'results' && (
        <Results
          category={selectedCategory}
          answers={quizResults}
          onHome={() => setCurrentView('home')}
          onReview={() => setCurrentView('review')}
        />
      )}
      {currentView === 'review' && (
        <ReviewMistakes
          answers={quizResults}
          onBack={() => setCurrentView('results')}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Layers,
  Calendar,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  Trophy,
  Activity,
  MessageCircle,
  Hash,
  Type,
  MapPin,
  HeartPulse,
  Palette,
  Globe2,
  ListFilter,
  Clock,
  CalendarDays,
  Landmark,
  Flag,
  BrainCircuit
} from 'lucide-react';
import { questionBank } from './data/questions';
import { studyMaterial } from './data/studyMaterial';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function TextScramble({ text }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

    const interval = setInterval(() => {
      setDisplayText(text.split('').map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
}

function App() {
  const [screen, setScreen] = useState('home'); // home, quiz, results, study-sheet
  const [homeTab, setHomeTab] = useState('practice'); // practice, study
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [incorrectTopics, setIncorrectTopics] = useState(new Set());
  const [allIncorrectTopics, setAllIncorrectTopics] = useState(new Set());
  const [studyContent, setStudyContent] = useState(null);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const startQuiz = (modeConfig) => {
    let selectedQs = [];

    if (typeof modeConfig === 'string') {
      const lowerMode = modeConfig.toLowerCase().trim();
      if (lowerMode === 'quick') {
        selectedQs = shuffle(questionBank).slice(0, 5);
      } else if (lowerMode === 'full') {
        selectedQs = shuffle(questionBank).slice(0, 30);
      } else if (lowerMode === 'daily') {
        selectedQs = shuffle(questionBank).slice(0, 10);
      } else if (lowerMode === 'retry') {
        if (allIncorrectTopics.size === 0) {
          alert("No previous mistakes recorded! Let's do a quick session instead.");
          selectedQs = shuffle(questionBank).slice(0, 5);
        } else {
          selectedQs = shuffle(questionBank.filter(q => allIncorrectTopics.has(q.topic))).slice(0, 15);
        }
      }
    }

    if (selectedQs.length === 0) selectedQs = shuffle(questionBank).slice(0, 5);

    setCurrentQuestions(selectedQs);
    setCurrentIndex(0);
    setScore(0);
    setIncorrectTopics(new Set());
    setSelectedOption(null);
    setShowFeedback(false);
    setScreen('quiz');
  };

  const openStudySheet = (key) => {
    const material = studyMaterial[key];
    if (!material) {
      alert("No content available for this topic yet.");
      return;
    }
    setStudyContent(material);
    setScreen('study-sheet');
  };

  const handleOptionSelect = (option) => {
    if (showFeedback) return;

    setSelectedOption(option);
    setShowFeedback(true);

    const currentQ = currentQuestions[currentIndex];
    const isCorrect = option === currentQ.correct;

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setIncorrectTopics(prev => {
        const next = new Set(prev);
        next.add(currentQ.topic);
        return next;
      });
      setAllIncorrectTopics(prev => {
        const next = new Set(prev);
        next.add(currentQ.topic);
        return next;
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setScreen('results');
    }
  };

  const restart = () => {
    setScreen('home');
  };

  const studyTopics = [
    { key: 'greetings', title: 'Greetings & Intros', desc: 'Basic daily conversations', icon: <MessageCircle size={20} /> },
    { key: 'articles', title: 'Articles', desc: 'Definite, indefinite, partitive', icon: <Type size={20} /> },
    { key: 'prepositions', title: 'Prepositions', desc: 'Locations & rules', icon: <MapPin size={20} /> },
    { key: 'verbs', title: 'Verbs', desc: 'ER, IR, & irregular forms', icon: <Activity size={20} /> },
    { key: 'adjectives', title: 'Adjectives', desc: 'Agreement & possessive', icon: <ListFilter size={20} /> },
    { key: 'numbers', title: 'Numbers (1-100)', desc: 'Counting from 1 to 100', icon: <Hash size={20} /> },
    { key: 'time', title: 'Time', desc: 'Telling time & fractions', icon: <Clock size={20} /> },
    { key: 'days', title: 'Days', desc: 'Days of the week', icon: <CalendarDays size={20} /> },
    { key: 'months', title: 'Months', desc: 'Months of the year', icon: <Calendar size={20} /> },
    { key: 'colors', title: 'Colors', desc: 'Color vocabulary & agreement', icon: <Palette size={20} /> },
    { key: 'nationalities', title: 'Nationalities', desc: 'Countries and origins', icon: <Flag size={20} /> },
    { key: 'body_pain', title: 'Body Parts & Pain', desc: 'Medical expressions', icon: <HeartPulse size={20} /> },
    { key: 'culture', title: 'Culture & Monuments', desc: 'Major days, landmarks', icon: <Landmark size={20} /> }
  ];

  return (
    <>
      <div className="bg-grid"></div>
      <div className="ambient-glow"></div>

      <div className="app-container">
        {screen === 'home' && (
          <motion.div initial="hidden" animate="show" variants={containerVariants}>
            <div className="hero-section">
              <motion.div variants={itemVariants} className="greeting-text">
                <TextScramble text="Bonjour 👋" />
              </motion.div>
              <motion.h1 variants={itemVariants} className="title-huge">FrancaiX</motion.h1>
              <motion.p variants={itemVariants} className="subtitle">Train exactly like your French FAT exam. High-yield MCQs. Real patterns.</motion.p>
            </div>

            <motion.div variants={itemVariants} className="tab-container">
              <div
                className={`tab-btn ${homeTab === 'practice' ? 'active' : ''}`}
                onClick={() => setHomeTab('practice')}
              >
                Mock Tests
              </div>
              <div
                className={`tab-btn ${homeTab === 'study' ? 'active' : ''}`}
                onClick={() => setHomeTab('study')}
              >
                Topic Study Mode
              </div>
            </motion.div>

            {homeTab === 'practice' && (
              <motion.div className="bento-grid" variants={containerVariants} initial="hidden" animate="show">
                <motion.div variants={itemVariants} className="bento-card" onClick={() => startQuiz('quick')}>
                  <div className="card-icon"><Zap size={20} /></div>
                  <div>
                    <div className="card-title">Quick Mix</div>
                    <div className="card-desc">5 random questions across topics</div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-card primary" onClick={() => startQuiz('full')}>
                  <div className="card-icon"><BrainCircuit size={20} /></div>
                  <div>
                    <div className="card-title">Full FAT Mock</div>
                    <div className="card-desc">30 questions. Full syllabus coverage</div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-card" onClick={() => startQuiz('daily')}>
                  <div className="card-icon"><Calendar size={20} /></div>
                  <div>
                    <div className="card-title">Daily Practice</div>
                    <div className="card-desc">10 balanced questions</div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-card" onClick={() => startQuiz('retry')}>
                  <div className="card-icon"><RefreshCw size={20} /></div>
                  <div>
                    <div className="card-title">Retry Weakness</div>
                    <div className="card-desc">Focus on your mistakes</div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {homeTab === 'study' && (
              <motion.div className="bento-grid" variants={containerVariants} initial="hidden" animate="show">
                {studyTopics.map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="bento-card" onClick={() => openStudySheet(item.key)}>
                    <div className="card-icon">{item.icon}</div>
                    <div>
                      <div className="card-title">{item.title}</div>
                      <div className="card-desc">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </motion.div>
        )}

        {screen === 'quiz' && currentQuestions.length > 0 && (
          <div>
            <div className="quiz-header">
              <div className="progress-pill">
                <Activity size={14} />
                {currentIndex + 1} / {currentQuestions.length}
              </div>
              <div className="topic-tag">{currentQuestions[currentIndex].topic.replace('_', ' ')}</div>
            </div>

            <h2 className="question-text">{currentQuestions[currentIndex].question}</h2>

            <div className="options-container">
              {currentQuestions[currentIndex].options.map((opt, i) => {
                let btnClass = "option-btn";
                if (showFeedback) {
                  if (opt === currentQuestions[currentIndex].correct) {
                    btnClass += " correct";
                  } else if (opt === selectedOption) {
                    btnClass += " incorrect";
                  } else {
                    btnClass += " disabled";
                  }
                }

                return (
                  <button
                    key={i}
                    className={btnClass}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showFeedback}
                  >
                    <span className="opt-letter">
                      {String.fromCharCode(97 + i)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className={`feedback-banner ${selectedOption === currentQuestions[currentIndex].correct ? 'is-correct' : 'is-incorrect'}`}>
                <div className="feedback-header">
                  {selectedOption === currentQuestions[currentIndex].correct ? (
                    <><CheckCircle2 size={20} /> Correct</>
                  ) : (
                    <><XCircle size={20} /> Incorrect</>
                  )}
                </div>

                {selectedOption !== currentQuestions[currentIndex].correct && (
                  <div style={{ marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>
                    Correct answer: {currentQuestions[currentIndex].correct}
                  </div>
                )}

                <div className="feedback-text">
                  {currentQuestions[currentIndex].explanation}
                </div>

                <button className="btn btn-primary" onClick={nextQuestion}>
                  {currentIndex + 1 === currentQuestions.length ? 'View Results' : 'Next Question'} <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}

        {screen === 'results' && (
          <div className="results-container">
            <div className="results-icon">
              <Trophy size={40} />
            </div>

            <div className="score-huge">
              {score}<span style={{ fontSize: '2.5rem', color: 'var(--text-muted)' }}>/{currentQuestions.length}</span>
            </div>

            <div className="accuracy-text">
              Accuracy: {Math.round((score / currentQuestions.length) * 100)}%
            </div>

            {incorrectTopics.size > 0 && (
              <div className="weak-spots">
                <h3><BookOpen size={18} /> Weak Topics Identified</h3>
                <div className="tags-container">
                  {Array.from(incorrectTopics).map(topic => (
                    <span key={topic} className="tag error-tag">{topic.replace('_', ' ')}</span>
                  ))}
                </div>
              </div>
            )}

            <button className="btn btn-secondary" onClick={restart}>
              <RefreshCw size={18} /> Back to Home
            </button>
          </div>
        )}

        {screen === 'study-sheet' && studyContent && (
          <div className="study-sheet-container">
            <div className="quiz-header" style={{ marginBottom: '1.5rem', borderBottom: 'none' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-main)' }}>
                {studyContent.title}
              </h2>
              <button
                className="btn btn-secondary"
                onClick={() => setScreen('home')}
                style={{ width: 'auto', padding: '8px 16px', fontSize: '0.9rem' }}
              >
                Back to Hub
              </button>
            </div>

            <div className="sheet-list">
              {studyContent.items.map((item, idx) => (
                <div key={idx} className="sheet-item">
                  <div className="sheet-q" style={{ textTransform: 'capitalize' }}>{item.term}</div>
                  <div className="sheet-a">
                    <ArrowRight size={16} className="inline-icon" /> <span style={{ color: 'var(--correct)' }}>{item.definition}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default App;

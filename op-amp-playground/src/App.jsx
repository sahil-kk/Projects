import React, { useState } from 'react';
import { Home } from './pages/Home';
import { Simulator } from './pages/Simulator';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import { GridPattern } from './components/ui/GridPattern';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <BackgroundEffects />
      {/* Universal Grid Pattern overlaying the Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridPattern className="text-primary/10" />
      </div>

      <div className="relative z-10">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'simulator' && <Simulator onNavigate={setCurrentPage} />}
      </div>
    </>
  );
}

export default App;

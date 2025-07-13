import React from 'react';
import MainLanding from './MainLanding';
import BackgroundPattern from './BackgroundPattern';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <MainLanding />
      </div>
    </div>
  );
};

export default HomePage;

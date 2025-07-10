import React from 'react';
import Header from './Header';
import ActionButtons from './ActionButtons';
import FeaturesPreview from './FeaturesPreview';
import Footer from './Footer';

const MainLanding = ({ onQuickPlay, onSignUp, onLogin }) => {
  return (
    <div className="max-w-4xl w-full">
      <Header />
      <ActionButtons 
        onQuickPlay={onQuickPlay}
        onSignUp={onSignUp}
        onLogin={onLogin}
      />
      <FeaturesPreview />
      <Footer />
    </div>
  );
};

export default MainLanding;
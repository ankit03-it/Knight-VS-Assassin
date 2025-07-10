import React from 'react';
import QuickPlayCard from './QuickPlayCard';
import JoinArenaCard from './JoinArenaCard';

const ActionButtons = ({ onQuickPlay, onSignUp, onLogin }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <QuickPlayCard onQuickPlay={onQuickPlay} />
      <JoinArenaCard onSignUp={onSignUp} onLogin={onLogin} />
    </div>
  );
};

export default ActionButtons;
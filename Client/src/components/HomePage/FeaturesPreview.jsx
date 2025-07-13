import React from 'react';
import { Users, Bot, Brain, Globe } from 'lucide-react';

const FeaturesPreview = () => {
  const features = [
    { icon: Users, label: 'Player vs Player', color: 'text-blue-400' },
    { icon: Bot, label: 'Player vs Computer', color: 'text-green-400' },
    { icon: Brain, label: 'Strategy Mind', color: 'text-purple-400' },
    { icon: Globe, label: 'Online Challenge', color: 'text-orange-400' }
  ];

  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-6">Unlock Your Full Potential</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-2`} />
            <p className="text-sm text-gray-300">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPreview;
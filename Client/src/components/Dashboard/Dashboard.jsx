import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Bot, 
  Brain, 
  Trophy, 
  LogOut,
  User,
  Crown,
  Zap,
  Target,
  ChevronRight,
  Play
} from 'lucide-react';
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from '../../context/NavigationContext';
import BackgroundPattern from '../HomePage/BackgroundPattern';


// Dashboard Home Content Component
const DashboardHome = ({ user }) => {
  // Mock data - replace with real data from your backend
  const stats = {
    rating: user?.rating || 1450,
    gamesPlayed: user?.gamesPlayed || 127,
    wins: user?.wins || 78,
    losses: user?.losses || 32,
    draws: user?.draws || 17,
    winRate: user?.winRate || 61.4
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Player Stats */}
        <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Rating</h3>
          </div>
          <p className="text-3xl font-bold text-purple-300">{stats.rating}</p>
          <p className="text-gray-400 text-sm">Chess Rating</p>
        </div>

        {/* Games Played */}
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Games Played</h3>
          </div>
          <p className="text-3xl font-bold text-blue-300">{stats.gamesPlayed}</p>
          <p className="text-gray-400 text-sm">Total Games</p>
        </div>

        {/* Win Rate */}
        <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Win Rate</h3>
          </div>
          <p className="text-3xl font-bold text-green-300">{stats.winRate}%</p>
          <p className="text-gray-400 text-sm">Success Rate</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-4 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/30 rounded-xl transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-purple-300" />
              <span className="text-white font-semibold">Quick Match</span>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center justify-between p-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 rounded-xl transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <Bot className="w-6 h-6 text-blue-300" />
              <span className="text-white font-semibold">Practice vs AI</span>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Recent Games */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6">Recent Games</h3>
        <div className="space-y-3">
          {[
            { opponent: "ChessMaster99", result: "Win", time: "2 hours ago", rating: "+12" },
            { opponent: "KnightRider", result: "Loss", time: "1 day ago", rating: "-8" },
            { opponent: "PawnStorm", result: "Win", time: "2 days ago", rating: "+15" }
          ].map((game, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <p className="text-white font-semibold">vs {game.opponent}</p>
                <p className="text-gray-400 text-sm">{game.time}</p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${game.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>
                  {game.result}
                </p>
                <p className={`text-sm ${game.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>
                  {game.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Profile Section Component
const ProfileSection = ({ user }) => (
  <div className="space-y-6">
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{user?.username || 'Player'}</h2>
          <p className="text-gray-400">{user?.email || 'player@chess.com'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Current Rating</p>
            <p className="text-2xl font-bold text-white">{user?.rating || 1450}</p>
          </div>
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Favorite Opening</p>
            <p className="text-white font-semibold">{user?.favoriteOpening || 'Sicilian Defense'}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Games Record</p>
            <div className="flex space-x-4 mt-2">
              <span className="text-green-400 font-semibold">W: {user?.wins || 78}</span>
              <span className="text-red-400 font-semibold">L: {user?.losses || 32}</span>
              <span className="text-gray-400 font-semibold">D: {user?.draws || 17}</span>
            </div>
          </div>
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Total Games</p>
            <p className="text-2xl font-bold text-white">{user?.gamesPlayed || 127}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Other section components remain the same as in the previous artifact...
const PlayerVsPlayerSection = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Player vs Player</h2>
      <p className="text-gray-300">Challenge real players and test your skills!</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Zap className="w-12 h-12 text-orange-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Quick Match</h3>
          <p className="text-gray-300 mb-6">Find an opponent instantly based on your rating</p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Find Match
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Users className="w-12 h-12 text-pink-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Create Room</h3>
          <p className="text-gray-300 mb-6">Create a private room and invite friends</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Create Room
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PlayerVsComputerSection = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Player vs Computer</h2>
      <p className="text-gray-300">Practice against AI opponents of varying difficulties</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { level: "Beginner", difficulty: "Easy", color: "green", description: "Perfect for learning basics" },
        { level: "Intermediate", difficulty: "Medium", color: "yellow", description: "Balanced challenge" },
        { level: "Expert", difficulty: "Hard", color: "red", description: "Test your limits" }
      ].map((ai, index) => (
        <div key={index} className="bg-gradient-to-br from-slate-600/20 to-slate-800/20 backdrop-blur-sm border border-slate-400/30 rounded-2xl p-6">
          <div className="text-center">
            <Bot className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{ai.level}</h3>
            <p className="text-slate-300 font-semibold mb-3">{ai.difficulty}</p>
            <p className="text-gray-300 text-sm mb-6">{ai.description}</p>
            <button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
              Play Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StrategyMindSection = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Strategy Mind</h2>
      <p className="text-gray-300">Improve your chess knowledge and tactics</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Brain className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Puzzle Training</h3>
          <p className="text-gray-300 mb-6">Solve tactical puzzles to sharpen your skills</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Start Training
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-teal-600/20 to-teal-800/20 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Target className="w-12 h-12 text-teal-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Opening Study</h3>
          <p className="text-gray-300 mb-6">Learn and practice chess openings</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Study Openings
          </button>
        </div>
      </div>
    </div>
  </div>
);

const OnlineChallengeSection = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Online Challenge</h2>
      <p className="text-gray-300">Participate in tournaments and special events</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Trophy className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Weekly Tournament</h3>
          <p className="text-gray-300 mb-4">Join this week's championship</p>
          <div className="bg-cyan-900/30 p-3 rounded-lg mb-6">
            <p className="text-cyan-300 text-sm">Prize Pool: $500</p>
            <p className="text-gray-400 text-sm">Participants: 234</p>
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Join Tournament
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-violet-600/20 to-violet-800/20 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-6">
        <div className="text-center">
          <Crown className="w-12 h-12 text-violet-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Ranked Ladder</h3>
          <p className="text-gray-300 mb-4">Climb the competitive ladder</p>
          <div className="bg-violet-900/30 p-3 rounded-lg mb-6">
            <p className="text-violet-300 text-sm">Current Rank: #127</p>
            <p className="text-gray-400 text-sm">League: Silver</p>
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            Play Ranked
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const { user, logout } = useAuth();
  const { goToHomePage } = useNavigation();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'pvp', label: 'Player vs Player', icon: Users },
    { id: 'pvc', label: 'Player vs Computer', icon: Bot },
    { id: 'strategy', label: 'Strategy Mind', icon: Brain },
    { id: 'challenge', label: 'Online Challenge', icon: Trophy }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <DashboardHome user={user} />;
      case 'profile': return <ProfileSection user={user} />;
      case 'pvp': return <PlayerVsPlayerSection />;
      case 'pvc': return <PlayerVsComputerSection />;
      case 'strategy': return <StrategyMindSection />;
      case 'challenge': return <OnlineChallengeSection />;
      default: return <DashboardHome user={user} />;
    }
  };

  const handleLogout = () => {
    logout();
    goToHomePage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800/90 backdrop-blur-sm border-r border-slate-700/50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
          <h1 className="text-2xl font-bold text-white">Chess Arena</h1>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-700/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-white capitalize">
                {activeSection === 'dashboard' ? 'Dashboard' : navigationItems.find(item => item.id === activeSection)?.label}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Welcome back</p>
                <p className="text-white font-semibold">{user?.username || user?.email || 'Player'}</p>
              </div>
              <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
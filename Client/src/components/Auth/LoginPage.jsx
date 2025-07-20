import React, { useState } from 'react';
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import BackgroundPattern from '../HomePage/BackgroundPattern';
import { useNavigation } from '../../context/NavigationContext';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const { goToHomePage, goToSignUp, goToDashboard } = useNavigation(); // Updated to use goToDashboard
  const { login } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const res = await login(formData.email, formData.password);
    if (res.success) {
      setMessage({ type: 'success', text: res.message });
      setTimeout(() => goToDashboard(), 1000); // Redirect to dashboard instead of game
    } else {
      setMessage({ type: 'error', text: res.message });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <button onClick={goToHomePage} className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-6">
              <ArrowLeft className="w-4 h-4" /><span>Back to Home</span>
            </button>
            <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300">Login to continue your chess journey</p>
          </div>

          <div className="bg-purple-700/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
            {message.text && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg mb-6 ${
                message.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                <span>{message.text}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
              </div>
              {/* Password */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white"
                    placeholder="Enter your password"
                  />
                  <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-400 mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-700 text-white py-3 px-6 rounded-xl hover:bg-purple-800"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400">
              Don't have an account?{' '}
              <button onClick={goToSignUp} className="text-purple-400 hover:text-purple-300">Sign up here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

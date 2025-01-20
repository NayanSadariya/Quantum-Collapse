import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={setCurrentPath} />;
      case '/play':
        return <GamePage />;
      case '/learn':
        return <LearnPage />;
      case '/about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPath} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPath={currentPath} onNavigate={setCurrentPath} />
      {renderContent()}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import Sidebar from './components/Navigation/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/UserProfile/Profile';
import Leaderboard from './components/Sections/Leaderboard';
import RecyclingMap from './components/Sections/RecyclingMap';
import Challenges from './components/Sections/Challenges';
import CustomerSupport from './components/Support/CustomerSupport';
import ChatbotWidget from './components/Chatbot/ChatbotWidget';
import NotificationSystem from './components/Notifications/NotificationSystem';
import CollectionSchedule from './components/CollectionSchedule';
import '@fontsource/inter';
import '@fontsource/poppins';

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'profile':
        return <Profile />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'map':
        return <RecyclingMap />;
      case 'challenges':
        return <Challenges />;
      case 'support':
        return <CustomerSupport />;
      default:
        return (
          <div className="space-y-6">
            <Dashboard />
            <CollectionSchedule />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-app-bg font-inter text-text-primary">
      <Sidebar onNavigate={setCurrentSection} />
      <NotificationSystem />
      <div className="pl-0 pt-16">
        {renderSection()}
      </div>
      <ChatbotWidget />
    </div>
  );
}

export default App;
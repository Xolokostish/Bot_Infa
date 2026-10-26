import { useState, useEffect, useRef } from 'react';
import ChatInterface from './components/ChatInterface';
import LandingSection from './components/LandingSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {!showChat ? (
        <div className="flex flex-col min-h-screen">
          <LandingSection onOpenChat={() => setShowChat(true)} />
          <FeaturesSection />
          <Footer />
        </div>
      ) : (
        <ChatInterface onBack={() => setShowChat(false)} />
      )}
    </div>
  );
}

export default App;

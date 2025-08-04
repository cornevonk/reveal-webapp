// src/App.jsx
import React from 'react';
import Landing from './components/Landing';
import ProgressNav from './components/ProgressNav';
import IntroSection from './chapters/IntroSection';
import MissionSection from './chapters/MissionSection';
import ResponsibilitiesSection from './chapters/ResponsibilitiesSection';
import SuperpowersSection from './chapters/SuperpowersSection';
import GrowthSection from './chapters/GrowthSection';
import FinalCTASection from './chapters/FinalCTASection';
import ShareProfile from './chapters/ShareProfile';

export default function App() {
  return (
    <div className="App overflow-x-hidden">
      <ProgressNav />
      <div className="container mx-auto px-4 text-center">
        <Landing />
        <IntroSection />
        <MissionSection />
        <ResponsibilitiesSection />
        <SuperpowersSection />
        <GrowthSection />
        <FinalCTASection />
        <ShareProfile />
      </div>
    </div>
  );
}

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
      <Landing />
      <IntroSection />
      <MissionSection />
      <ResponsibilitiesSection />
      <SuperpowersSection />
      <GrowthSection />
      <FinalCTASection />
      <ShareProfile />
    </div>
  );
}

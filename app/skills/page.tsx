import React from 'react';
import Header from './Header';
import SkillsSection from './SkillsSection';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col bg-white px-20">
      <Header />
      <div className="flex flex-col items-center w-full overflow-hidden bg-white pb-80 max-md:pb-24 max-md:max-w-full">
        <SkillsSection />
      </div>
    </main>
  );
};

export default MainContent;
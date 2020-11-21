import React from 'react';
import SoftSkills from './SoftSkills';
import KnowMore from './KnowMore';
import FirstSection from './FirstSection';
import Content from './style';

const Home: React.FC = () => {
  return (
    <Content>
      <FirstSection />
      <SoftSkills />
      <KnowMore />
    </Content>
  );
};

export default Home;

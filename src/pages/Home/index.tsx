import React from 'react';
import FirstSection from '../FirstSection';
import SoftSkills from '../SoftSkills';
import Benefits from '../Benefits';
import Content from './style';

const Home: React.FC = () => {
  return (
    <Content>
      <FirstSection />
      <SoftSkills />
      <Benefits />
    </Content>
  );
};

export default Home;

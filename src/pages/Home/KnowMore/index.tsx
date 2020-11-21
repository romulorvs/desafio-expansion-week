import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Content from './style';
import SkillCard from '../../../components/SkillCard';

const KnowMore: React.FC = () => {
  const [skills] = useState([
    {
      title: 'Adaptabilidade',
      description: `Adaptabilidade é a capacidade de se adaptar, de acordo com as necessidades,
      a situações e circunstâncias adversas. É uma Soft Skill muito procurada em empresas
      que lidam com incertezas e mudanças`,
      backGradient: 'linear-gradient(55deg, #0f87c4 0%, #025fb9 100%)',
      videoUrl: 'https://www.youtube.com/embed/TfTl3HLedw0',
      videoTitle: 'A adaptabilidade como forma de se reinventar',
    },
    {
      title: 'Inteligência Emocional',
      description: `A Inteligência Emocional pode ser
      descrita como a forma como nós aprendemos a encarar nossas próprias emoções e como as usamos para
      o nosso benefício.`,
      backGradient: 'linear-gradient(55deg, #e75662 0%, #ff4b4b 100%)',
      videoUrl: 'https://www.youtube.com/embed/mKmFpKSBPhk',
      videoTitle: '7 hábitos para desenvolver a Inteligência Emocional',
    },
    {
      title: 'Ética Profissional',
      description: `Ética Profissional pode ser resumida como a postura de responsabilidade com
      o trabalho. Quem desenvolve essa Soft Skill busca cumprir os compromissos firmados
      e manter uma postura profissional com seus colegas.`,
      backGradient: 'linear-gradient(55deg, #e6c267 0%, #ebbf2b 100%)',
      videoUrl: 'https://www.youtube.com/embed/pEXhGE7Fd6s',
      videoTitle: 'Ética Profissional com Leandro Karnal',
    },
  ]);

  return (
    <Content id="knowmore">
      <div>
        <h2>O que são Soft Skills e como elas afetam sua vida profissional?</h2>
        <h3>
          <i className="small">
            Soft Skills são habilidades ligadas às relações interpessoais e ao
            desenvolvimento profissional, e podem ser grandes aliadas na sua
            carreira.
          </i>
          <i className="big">
            Soft Skills são habilidades ligadas às relações interpessoais e ao
            desenvolvimento profissional. Diferentemente das Hard Skills, as
            Soft Skills são difíceis de mensurar, mas o impacto que causam na
            vida profissional pode ser ainda maior.{' '}
          </i>
          <span>Algumas Soft Skills muito importantes são:</span>
        </h3>
        <ul>
          {skills.map(
            ({ title, description, backGradient, videoUrl, videoTitle }) => (
              <SkillCard
                key={title}
                title={title}
                description={description}
                backGradient={backGradient}
                videoUrl={videoUrl}
                videoTitle={videoTitle}
              />
            ),
          )}
        </ul>
      </div>
      <div>
        <Link to="/improving">Desenvolva-se</Link>
      </div>
    </Content>
  );
};

export default KnowMore;

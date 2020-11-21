import React from 'react';
import Content, { InnerContent } from './style';
import videoBack from '../../../assets/video.mp4';
import { ReactComponent as Rocket } from '../../../assets/rocket.svg';

const FirstSection: React.FC = () => {
  return (
    <Content id="home">
      <video autoPlay loop muted>
        <source src={videoBack} type="video/mp4" />
      </video>
      <div>
        <InnerContent>
          <div>
            <h3>
              Desenvolva suas Soft Skills e dê o próximo passo na sua carreira.
            </h3>
            <h2>
              Melhore a sua Tomada de Decisões, tenha mais Foco e Resiliência e
              aprenda a lidar com Adversidades.
            </h2>
            <div>
              <a href="#softskills">Saiba Mais</a>
            </div>
          </div>
          <Rocket />
        </InnerContent>
      </div>
    </Content>
  );
};

export default FirstSection;

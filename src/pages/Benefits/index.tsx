import React from 'react';
import { Link } from 'react-router-dom';
import Content, { InnerContent } from './style';
import videoBack from '../../assets/video.mp4';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';

const Benefits: React.FC = () => {
  return (
    <Content id="benefits">
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
              Melhore a sua Tomada de Decisões, tenha mais Foco e Perseverança e
              saiba lidar com as Adversidades no ambiente de trabalho.
            </h2>
            <div>
              <Link to="/improving">Desenvolva-se</Link>
            </div>
          </div>
          <Rocket />
        </InnerContent>
      </div>
    </Content>
  );
};

export default Benefits;

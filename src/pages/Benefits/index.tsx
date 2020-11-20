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
              Aumente a longevidade da sua carreira, tenha maior qualidade
              profissional e saiba lidar com adversidades.
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

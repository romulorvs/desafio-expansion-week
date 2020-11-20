import React, { useCallback, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Content } from './style';
import { ReactComponent as Flip } from '../../assets/flip-page.svg';

interface SkillCardProps {
  title?: string | undefined;
  description?: string | undefined;
  backGradient?: string | undefined;
  videoTitle: string;
  videoUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  backGradient,
  title,
  description,
  videoTitle,
  videoUrl,
}) => {
  const { setVideoData } = useContext(AppContext);
  const handleButtonClick = useCallback(() => {
    setVideoData({ videoUrl, videoTitle });
  }, [setVideoData, videoUrl, videoTitle]);

  return (
    <Content backGradient={backGradient}>
      <div className="front">
        {title && (
          <>
            <h3>{title}</h3> <Flip />
          </>
        )}
      </div>
      <div className="back">
        {description && <p>{description}</p>}
        <button type="button" onClick={handleButtonClick}>
          Veja um Vídeo
        </button>
      </div>
    </Content>
  );
};

export default SkillCard;

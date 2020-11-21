import React, { useCallback, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Content from './style';

interface ColumnProps {
  imgUrl: string;
  title: string;
  Description: JSX.Element;
  smallDescription: string;
  videoUrl: string;
  videoTitle: string;
}

const SkillColumn: React.FC<ColumnProps> = ({
  imgUrl,
  title,
  Description,
  smallDescription,
  videoUrl,
  videoTitle,
}) => {
  const { setVideoData } = useContext(AppContext);
  const handleButtonClick = useCallback(() => {
    setVideoData({ videoUrl, videoTitle });
  }, [setVideoData, videoUrl, videoTitle]);

  return (
    <Content>
      <img src={imgUrl} alt={title} />
      <div>
        <div className="hideOnHover">
          <h2>{title}</h2>
          <p>{smallDescription}</p>
        </div>
        <div className="showOnHover">
          {Description}
          <button type="button" onClick={handleButtonClick}>
            Assista a um Vídeo
          </button>
        </div>
      </div>
    </Content>
  );
};

export default SkillColumn;

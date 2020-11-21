import React, { useEffect, useCallback, useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { AppContext } from '../../context/AppContext';
import { Content } from './style';

const VideoModal: React.FC = () => {
  const { videoData, setVideoData } = useContext(AppContext);

  useEffect(() => {
    if (videoData !== null) {
      document.body.style.overflow = 'hidden'; // hide body scroll
    } else {
      document.body.style.overflow = ''; // show body scroll
    }
  }, [videoData]);

  const handleCloseModal = useCallback(() => {
    setVideoData(null);
  }, [setVideoData]);

  if (videoData === null) {
    return null;
  }

  return (
    <Content>
      {/* eslint-disable-next-line */}
      <div className="background" onClick={handleCloseModal} />
      <div className="modal">
        <div>
          <div className="loader-container">
            <div className="loader" />
          </div>
          <iframe
            src={`${videoData.videoUrl}?autoplay=1`}
            title={videoData.videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h3>{videoData.videoTitle}</h3>
      </div>
      <button type="button" onClick={handleCloseModal}>
        <FiX size={35} />
      </button>
    </Content>
  );
};

export default VideoModal;

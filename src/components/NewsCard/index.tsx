import React from 'react';
import Content from './style';

interface NewsCardProps {
  imgUrl: string;
  url: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imgUrl,
  url,
  title,
  description,
}) => {
  return (
    <Content>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </Content>
  );
};

export default NewsCard;

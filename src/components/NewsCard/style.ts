import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }

  &:focus-within {
    opacity: 0.5;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 4px;
    box-shadow: 0 5px 10px 0 #000;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  h3 {
    color: #fff;
    font-size: 26px;
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 18px;
      margin: 5px 0;
    }
  }

  p {
    color: #999;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export default Content;

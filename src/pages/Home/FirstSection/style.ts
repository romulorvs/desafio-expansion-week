import styled from 'styled-components';
import { headerHeight } from '../../../components/Header/style';

interface ContentProps {
  id?: string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  background-color: #180056;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > div {
    position: absolute;
    padding-top: ${headerHeight};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(16, 7, 39, 1) 0%,
      rgba(16, 7, 39, 0.99) 25%,
      rgba(16, 7, 39, 0.95) 50%,
      rgba(16, 7, 39, 0.7) 75%,
      rgba(16, 7, 39, 0.4) 100%
    );

    @media (max-width: 768px) {
      background: rgba(16, 7, 39, 0.89);
    }
  }
`;

export const InnerContent = styled.div`
  position: relative;
  margin: 15px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    width: 65%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  svg {
    width: 30%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  h3 {
    color: #888;
    font-size: 22px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  h2 {
    color: #fff;
    font-size: 60px;
    margin: 10px 0 30px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: white;
    border: 2px solid #2ba837;
    font-size: 20px;
    transition: background-color 0.15s;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px 14px;
    }

    &:focus {
      background-color: rgba(43, 168, 55, 0.4);
    }

    &:hover {
      background-color: #2ba837;
    }
  }
`;

export default Content;

import styled from 'styled-components';
import { headerHeight } from '../../components/Header/style';

interface ContentProps {
  id?: string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  position: relative;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  padding-top: calc(${headerHeight} - 15px);
  padding-bottom: 15px;

  @media (max-height: 768px) {
    scroll-snap-align: start;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 15px;
    max-width: 1000px;
    width: 100%;

    @media (max-width: 768px) {
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  h2 {
    font-size: 50px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  h3 {
    color: #888;
    font-size: 28px;
    margin-top: 15px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    i.big {
      display: unset;
    }
    i.small {
      display: none;
    }
    @media (max-width: 768px) {
      i.big {
        display: none;
      }
      i.small {
        display: unset;
      }
    }

    span {
      color: #fff;
      display: block;
      margin-top: 10px;
    }
  }

  ul {
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 15px;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      transform: scale(0.88);

      @media (max-width: 768px) {
        transform: scale(0.92);
      }
    }
  }
`;

export default Content;
import styled from 'styled-components';
import { headerHeight } from '../../../components/Header/style';

interface ContentProps {
  id?: string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: space-around;
  background-color: #131313;
  padding-bottom: 15px;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-top: ${headerHeight};

  @media (max-width: 768px) {
    align-items: unset;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: ${headerHeight};
    justify-content: center;
  }
  scroll-snap-align: start;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
  }

  h2 {
    font-size: 50px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  h3 {
    color: #888;
    font-size: 28px;
    margin-top: 15px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-top: 10px;
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
      margin-top: 8px;
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
    }

    > div:nth-child(1) {
      @media (max-width: 768px) {
        transform: scale(0.92) translateX(+2px);
        margin-left: -6px;
      }
    }

    > div:nth-child(3) {
      @media (max-width: 768px) {
        transform: scale(0.92) translateX(-2px);
        margin-right: -6px;
      }
    }
  }

  > div + div {
    flex-direction: unset;
    justify-content: center;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      color: white;
      border: 2px solid #2ba837;
      font-size: 20px;
      transition: background-color 0.15s;
      margin-top: 20px;

      @media (max-width: 768px) {
        font-size: 16px;
        padding: 12px 14px;
        margin-top: 25px;
      }

      &:focus {
        background-color: rgba(43, 168, 55, 0.4);
      }

      &:hover {
        background-color: #2ba837;
      }
    }
  }
`;

export default Content;

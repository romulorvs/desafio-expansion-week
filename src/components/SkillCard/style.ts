import styled, { css } from 'styled-components';

interface ContentProps {
  backGradient?: string;
}

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 15px 27px -17px rgba(0, 0, 0, 0.3), 0 0 0px 1px rgb(51 51 51);
  border: 7px solid #252525;
  border-radius: 4px;
  position: relative;

  @media (max-width: 768px) {
    height: 220px;
    border: 0;
  }

  h3 {
    text-align: center;
    font-size: 150%;

    @media (max-width: 768px) {
      font-size: 110%;
    }
  }

  p {
    text-align: center;
  }

  > * + * {
    margin-top: 10px;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: transform 0.8s;
    backface-visibility: hidden;
    border-radius: 4px;
    transform: perspective(800px) rotateY(0deg);
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  .front {
    ${props =>
      props.backGradient &&
      css`
        background: ${props.backGradient};

        h3 {
          color: #fff;
          font-size: 30px;

          @media (max-width: 768px) {
            font-size: 14px;
          }
        }
      `}

    svg {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 30px;
      height: 30px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }

      path {
        fill: rgba(0, 0, 0, 0.25);
      }
    }
  }

  .back {
    font-size: 18px;
    transform: perspective(800px) rotateY(180deg);

    @media (max-width: 768px) {
      font-size: 10px;
    }

    button {
      margin-top: 10px;
      padding: 6px 8px;
      border: 2px solid #11af4d;
      transition: color 0.2s, background-color 0.2s;

      @media (max-width: 768px) {
        padding: 5px;
        font-size: 10px;
        margin-top: 6px;
      }

      &:focus {
        background-color: #c2ffb6;
      }

      &:hover {
        background-color: #11af4d;
        color: white;
      }
    }
  }

  &:hover {
    .front {
      transform: perspective(800px) rotateY(-180deg);
    }
    .back {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  &:focus-within {
    .front {
      transform: perspective(800px) rotateY(-180deg);
    }
    .back {
      transform: perspective(800px) rotateY(0deg);
    }
  }
`;

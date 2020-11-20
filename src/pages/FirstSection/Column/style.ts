import styled from 'styled-components';

const transitionTime = '0.4s';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: box-shadow ${transitionTime} ease-in-out;
  min-height: 100vh;

  @media (max-width: 768px) {
    scroll-snap-align: start;
  }

  > img {
    object-fit: cover;
    object-position: center top;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 101%;
    height: 101%;
    transform: translate(-50%, -50%);
    transition: width ${transitionTime} ease-in-out,
      height ${transitionTime} ease-in-out;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.15);
    transition: background-color ${transitionTime} ease-in-out;
    color: white;
    display: flex;
    flex-direction: column;

    &:before {
      content: '';
      flex-grow: 1;
    }

    > div {
      position: absolute;
      padding: 25px;
      bottom: 10%;
      left: 0;
      right: 0;
      transition: opacity ${transitionTime} ease-in-out,
        padding-bottom ${transitionTime};

      @media (max-height: 768px) {
        bottom: 5%;
      }
    }
  }

  .hideOnHover {
    opacity: 1;
    padding-bottom: 15%;

    h2 {
      font-size: 48px;
      @media (max-width: 768px) {
        font-size: 36px;
      }
    }

    p {
      font-size: 20px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .showOnHover {
    opacity: 0;
    overflow: hidden;
    padding-bottom: 0;

    p {
      font-size: 24px;
      margin-bottom: 15px;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      strong {
        display: block;
        font-size: 32px;
        margin-bottom: 10px;
        font-style: italic;

        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      color: white;
      border: 2px solid #2ba837;
      font-size: 18px;
      transition: background-color 0.15s;
      background-color: unset;

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
  }

  &:hover {
    .hideOnHover {
      opacity: 0;
      padding-bottom: 0;
    }
    .showOnHover {
      opacity: 1;
      padding-bottom: 15%;
    }

    > img {
      width: 105%;
      height: 105%;
    }

    > div {
      background-color: rgba(0, 0, 0, 0.45);
    }

    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

export default Content;

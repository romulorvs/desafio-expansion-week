import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .background {
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
  }

  .modal {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 830px;
    border-radius: 4px;
    padding: 15px;

    @media (max-width: 768px) {
      padding: 0;
    }

    > div {
      position: relative;

      .loader-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    iframe {
      width: 100%;
      height: 450px;
      box-shadow: 0 15px 27px -17px rgba(0, 0, 0, 0.3);
      border: 4px solid #3c3c3c;
      border-radius: 8px;
      position: relative;

      @media (max-width: 768px) {
        height: 300px;
      }
    }

    h3 {
      text-align: center;
      margin-top: 10px;
      font-size: 24px;
      color: white;
    }
  }

  > button {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 5;
    background: unset;
    border: 2px solid transparent;
    border-radius: 60px;
    padding: 8px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    &:focus {
      border-color: #3c3c3c;
    }

    svg {
      color: #fff;
    }
  }

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

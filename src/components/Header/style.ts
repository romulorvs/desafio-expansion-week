import styled from 'styled-components';

export const headerHeight = '80px';

const Content = styled.div`
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding-left: 15px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  /* Logo */
  > a {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 45px;
    padding: 10px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.4);
    transition: transform 0.2s;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }

    svg {
      width: 40px;
      height: 40px;

      @media (max-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      p {
        font-weight: 700;
        font-size: 19px;

        & + p {
          font-weight: 500;
          font-size: 17px;
        }
      }
    }
  }

  /* Menu Links */
  ul a {
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 4px;
    border: 2px solid transparent;
    color: white;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    margin-left: 10px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 768px) {
      padding: 5px;
      margin-left: 3px;
      font-size: 80%;
    }
  }
`;

export default Content;

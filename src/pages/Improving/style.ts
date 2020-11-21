import styled from 'styled-components';

import { headerHeight } from '../../components/Header/style';

const Content = styled.div`
  min-height: 100vh;
  background-color: #131313;
  padding-top: calc(${headerHeight} + 30px);

  > div {
    display: flex;
    margin: 0 auto;
    width: 100%;
    padding: 15px;
    max-width: 1200px;

    @media (max-width: 768px) {
      padding: 10px;
    }

    h3 {
      color: white;
      padding: 0 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid green;
      margin: 0 auto;

      @media (max-width: 768px) {
        font-size: 30px;
        padding-bottom: 15px;
        margin-bottom: 5px;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    padding: 15px;
    max-width: 1200px;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 10px;
    }

    div {
      width: calc(25% - 15px);
      margin-bottom: 50px;

      @media (max-width: 768px) {
        width: calc(50% - 5px);
      }
    }
  }
`;

export default Content;

import styled from 'styled-components';

const Content = styled.div`
  @media (max-width: 768px) {
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;

export default Content;

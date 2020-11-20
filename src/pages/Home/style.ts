import styled from 'styled-components';

const Content = styled.div`
  /* Snap Stick on Mobile */
  @media (max-width: 768px) {
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
  }
`;

export default Content;

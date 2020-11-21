import styled from 'styled-components';

interface ContentProps {
  id?: string;
}

const Content = styled.div<ContentProps>`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) {
    scroll-snap-align: start;
  }
`;

export default Content;

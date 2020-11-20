import styled from 'styled-components';

const Content = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Content;

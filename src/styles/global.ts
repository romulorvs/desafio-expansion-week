import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html{
    @media (min-width: 769px){
      scroll-behavior: smooth;
    }
  }

  body{
    background-color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #2f2f2f;
  }

  #root {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button, input{
    cursor: pointer;
    border: 0;
    background: white;
  }

  a{
    text-decoration: none;
  }

  h1,h2,h3 {
    font-weight: 500;
  }

  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 36px;
  }
`;

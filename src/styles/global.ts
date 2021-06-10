import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //Por padrão as fontes vem com 16px de tamanho
  //Durante o projeto será utilizado rem, o rem é equivalente ao tamanho de fonte padrão naquele momento defindo pelo estilo global para o browser, então acima de 1080 1rem = 16px
  html {
    //A porcentagem é utilizada para ajudar ferramentas de usabilidade, caso uusario esteja dando zoom, com % a fonte aumenta, com px, ela não aumentaria
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
     background: var(--background);
     -webkit-font-smoothing: antialiased; // deixar fontes mais claras para ler
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
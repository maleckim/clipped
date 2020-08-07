import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    color: white;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #242628;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .navbtn {
    margin-left: 5px;
    color:white;
    background-color: #242628;
    border-color: #00FEDE;
  }

  .navsrch, .navsrch:focus {
    border: 1px solid #00FEDE;
    border-radius:6px;
    background:transparent;
    box-shadow:none;
    color: white;
  }
  
  .navicn {
    background: #242628;
    color:#00FEDE;
  }

  
`;

export default GlobalStyle;

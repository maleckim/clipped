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
    background-color: #03132c;
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
    background-color: 	#03132c;
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
    background: 	#03132c;
    color:#00FEDE;
    border: none;
    cursor: pointer;
    z-index:50;
  }

  .clip-main{
    border-radius: 6px;
    background-color: #19273d;
    z-index: -1;
    -webkit-box-shadow: 5px 5px 20px #03132c;
    -moz-box-shadow: 5px 5px 20px #03132c;
    box-shadow: 5px 5px 20px #03132c;
  }

  .clip-card{
    overflow: hidden;
    height:fit-content;
    margin-bottom: 5vh;
  }

  
  
  

  
`;

export default GlobalStyle;

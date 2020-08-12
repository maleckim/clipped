import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    color: white;
  }

  body {
    font-family: 'montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #03132c;
    min-height: 100%;
    min-width: 100%;
  }

  h1{
  padding: 10px 25px;
  color: #FFF;
  font-weight: 600;
  text-shadow: 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 12px 0px;
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

  .navsrch, .navsrch:focus, .navicn {
    border: 1px solid #00FEDE;
    border-radius:6px;
    background:transparent;
    box-shadow:none;
    color: white;
  }
  
  .navicn {
    background: 	#03132c;
    color:#00FEDE;
    cursor: pointer;
    z-index:50;
  }

  .fa-search, .fa-arrow-up, .fa-arrow-down{
    border: none;
  }

  .clip-main{
    border-radius: 13px;
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

  video{
    border-radius: 13px;
    box-shadow 3px 6px rgba(0, 0, 0, 0.25);
    background-color:rgba(255, 255, 255, 0.25);
    margin: 30px 0px;
  }

  button{
    box-shadow 1px 2px rgba(0, 0, 0, 0.25);
  }

  .left-form{
    border-radius: 13px;
    box-shadow 3px 6px rgba(0, 0, 0, 0.25);
    background-color:rgba(255, 255, 255, 0.25);
    height: fit-content;
    padding:10px;
    
  }
  
  

  
`;

export default GlobalStyle;

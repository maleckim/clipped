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

  .search {
    transform:scale(0.6) translate(0, -40%);
    width: 100px;
    height: 100px;
    margin: 40px auto 0;
    background-color: #242628;
    position: relative;
    overflow: hidden;
    transition: all .5s ease;
    &:before {
      content: '';
      display: block;
      width: 3px;
      height: 100%;
      position: relative;
      background-color: #00FEDE;
      transition: all .5s ease;
    }
    &.open {
      width: 420px;
      &:before {
        height: 60px;
        margin: 20px 0 20px 30px;
        position: absolute;
      }
    }
  }
  
  .search-box {
    width: 170%;
    height: 100%;
    box-shadow: none;
    border: none;
    background: #3a3d3b;
    border-radius:8px;
    color: #fff;
    padding: 20px 100px 20px 45px;
    font-size: 40px;
    &:focus {
      outline: none;
    }
  }
  
  .search-button {
    outline-color: #242628;
    width: 100px;
    height: 100px;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    cursor: pointer;
  }
  
  .search-icon {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 3px solid #00FEDE;
    display: block;
    position: relative;
    margin-left: 5px;
    transition: all .5s ease;
    &:before {
      content: '';
      width: 3px;
      height: 15px;
      position: absolute;
      right: -2px;
      top: 30px;
      display: block;
      background-color: #00FEDE;
      transform: rotate(-45deg);
      transition: all .5s ease;
    }
    &:after {
      content: '';
      width: 3px;
      height: 15px;
      position: absolute;
      right: -12px;
      top: 40px;
      display: block;
      background-color: #00FEDE;
      transform: rotate(-45deg);
      transition: all .5s ease;
    }
    .open & {
      margin: 0;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      &:before {
        transform: rotate(52deg);
        right: 22px;
        top: 23px;
        height: 18px;
      }
      &:after {
        transform: rotate(-230deg);
        right: 22px;
        top: 13px;
        height: 18px;
      }
    }
  }
  

  
`;

export default GlobalStyle;

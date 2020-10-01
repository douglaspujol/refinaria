import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline:0;
  }
  html, body , #hoot{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px "Hind",sans-serif;
    color:#393d40;
  }

  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
  }
`;

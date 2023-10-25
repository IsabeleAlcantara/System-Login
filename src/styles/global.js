import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
 }
 
 body {
    width: 100vh;
    height: 100vh;
    background-color: #808080;
    font-family: Arial, Helvetica, sans-serif
 }
 
 `;

 export default GlobalStyle;


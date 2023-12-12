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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
    margin-right: auto;
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
 }
 
 `;

 export default GlobalStyle;


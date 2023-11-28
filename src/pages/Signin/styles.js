import styled from "styled-components";

export const  container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;

`;
export const content = styled.div`
 gap: 15px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 100%;
 box-shadow: 0 1px 2px #0003;
 background-color: #fff;
 max-width: 350px;
 padding: 20px;
 border-radius: 5px;
 
`;

export const label = styled.label`
 font-size: 18px;
 font-weight: 600;
 color: #676767;

`;

export const labelSignup = styled.label`
 font-size: 16px;
 background: #fff;
 color: #676767;

`;

export const labelError = styled.label`
 font-size: 14px;
 color: red;
`;

export const Strong = styled.label`
 cursor: pointer;
a {
    text-decoration: inline;
    color: #676767;
}
`;
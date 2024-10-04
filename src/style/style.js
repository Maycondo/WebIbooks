import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'

const GlobaStyle = createGlobalStyle`
      * {
         box-sizing: border-box;
         font-family: "Libre Caslon Text", serif;
         margin: 0;
         padding: 0;
      };

      body {
         height: 100vh;
         width: 100vw;
         margin: 0;
         padding: 0;
         font-family: Arial, sans-serif;
         background-color: #FFEFD5;
         overflow-x: hidden;
         display: flex;
      }
`;
export default GlobaStyle;

export const Conteiner_nav = styled.div`

      height: 100%;
      width: 10rem;
      display: flex;
      justify-content: space-between;

      nav {
         height: 100%;
         margin: 0rem 0.5rem;
         width: 5rem;   
         border-left: solid 4px #DEB887;
         border-right: solid 4px #DEB887;
         background-color: #2c1810;
         display: flex;
         align-content: center;
         justify-content: center;
      }

      ul {
         margin: 2rem 0rem;
         width: 100%;
         gap: 7rem;
         list-style: none;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }

      li {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      a {
         text-decoration: none;
         color: #FFF8DC;
         font-size: 1.5rem;
         transition: all ease 400ms;
         font-weight: bold;
         animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
         0% {
            transform: scale(1);
         }
         50% {
            transform: scale(1.1);
         }
         100% {
            transform: scale(1);
         }
      }
`;

export const Conteiner_painel = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column; 
`;


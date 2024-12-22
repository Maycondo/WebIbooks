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

export const Conteiner_nav = styled.nav`
      
         height: 100%;
         z-index: 7;
         width: 100%;
         position: fixed;
         background-color: #F5F5DC;
         align-content: center;
         justify-content: center;


      ul {
         height: 90%;
         width: 100%;
         gap: 7rem;
         list-style: none;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }

      li {
         height: auto;
         width: 100%;
         display: flex;
         justify-content: start;
         align-items: start;
      }

      a {
         height: 4rem;
         width: 4rem;
         margin: 0rem 1rem;
         display: flex;
         justify-content: start;
         text-align: start;
         text-decoration: none;
         color: #FFF8DC;
         font-size: 7rem;
         transition: all ease 400ms;
         font-weight: bold;
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

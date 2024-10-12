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
      
         height: 40rem;
         z-index: 5;
         width: 22rem;
         position: fixed;
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
         border-bottom-left-radius: 10px;
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
         background-color: #F5F5DC;
         align-content: center;
         justify-content: center;


      ul {
         margin: 2rem 0rem;
         width: 100%;
         gap: 5rem;
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
         justify-content: center;
         align-items: center;
      }

      a {
         height: 4rem;
         width: 4rem;
         border-top-left-radius: 40%;
         border-bottom-left-radius: 40%;
         display: flex;
         justify-content: center;
         align-items: center;
         text-decoration: none;
         color: #FFF8DC;
         font-size: 1.5rem;
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


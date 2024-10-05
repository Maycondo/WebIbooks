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
      width: 6rem;
      display: flex;
      justify-content: space-between;

      nav {
         height: 95%;
         margin: 1rem 1rem;
         border-radius: 50px;
         width: 5rem;
         background-color: #2c1810;
         display: flex;
         align-content: center;
         justify-content: center;
      }

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
         display: flex;
         justify-content: center;
         align-items: center;
         border-top-left-radius: 50px;
         border-bottom-left-radius: 50px;
      }

      a {
         height: 4rem;
         width: 4rem;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
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


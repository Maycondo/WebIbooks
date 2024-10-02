import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'

const GlobaStyle = createGlobalStyle`
      * {
         box-sizing: border-box;
         margin: 0;
         padding: 0;
      };

      body {
         height: 100vh;
         width: 100vw;
         font-family: Arial, sans-serif;
         background-color: #FFEFD5;
         display: flex;
      }
`;
export default GlobaStyle;

export const Conteiner_nav = styled.div`

      height: 100%;
      width: 5rem;
      display: flex;
      justify-content: space-between;
      background-color: #FFDEAD;
      border-top-right-radius: 10rem;
      border-bottom-right-radius: 10rem;

      nav {
         width: 100%;
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
         font-weight: bold;
      }
`;

export const Conteiner_painel = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column; 
`;


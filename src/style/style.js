import {createGlobalStyle} from "styled-components"
import styled from 'styled-components'

const GlobaStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   };

   body {
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #FFEFD5;
    display: flex;
   }
`;
export default GlobaStyle;

export const Conteiner = styled.div`
      height: 100%;
      width: 5rem;
      display: flex;
      justify-content: space-between;
      background-color: white;

      nav {
         width: 100%;
         display: flex;
         align-content: center;
         justify-content: center;
      }

      ul {
         margin: 2rem 0rem;
         width: 100%;
         gap: 8rem;
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
         padding: 0.5rem;
      }

      a {
         text-decoration: none;
         color: #000;
         font-size: 1.5rem;
         font-weight: bold;
      }
`;

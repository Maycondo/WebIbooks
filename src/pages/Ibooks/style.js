import styled from "styled-components";

export const ContainerCategory = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ContainerCategory;

export const DivCategory = styled.div`
    height: 80rem; 
    width: 100%;
    display: flex;
    align-items: center; 
`;

export const NavCategory = styled.nav`
    height: 100%;
    display: flex;
    padding: 2rem;
    gap: 0.5rem;
    flex-direction: column;


    h2 {
        margin-top: 2.5rem;
        font-size: 1rem;
        text-align: center;
        font-weight: bold;
        color: #2c1810;
    }

    ul {
        margin: 0%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
        padding: 0.4rem;
    }

    li:hover{
        border-left: solid 3px #2c1810;
    }

    h3{
        margin: 0.6rem;
        font-size: 1rem;
        font-weight: 900;
        color: #2c1810;
    }

`

export const CategoriaItem = styled.li`
    color: ${({ isSelected }) => (isSelected ? "#CD853F" : "#2c1810")};
    border-left: ${({ isSelected }) => (isSelected ? "solid 3px #2c1810" : "none")};    
    cursor: pointer;
    font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
    transition: background-color 0.2s, color 0.2s;
    padding-left: 8px;
  
`;

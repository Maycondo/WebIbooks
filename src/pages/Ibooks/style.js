import styled from "styled-components";

export const ContainerCategory = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ContainerCategory;

export const DivCategory = styled.div`
    height: 100vh; 
    width: 100%;
    display: flex;
    align-items: center; 
`;

export const NavCategory = styled.nav`
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;


    h2 {
        font-size: 1rem;
        font-weight: bold;
        color: #2c1810;
    }

    li {
        list-style: none;
        padding: 0.4rem;
    }

    li:hover{
        border-left: solid 3px #2c1810;
    }

    h3{
        text-align: center;
        margin: 0.6rem;
        font-size: 1rem;
        font-weight: 900;
        color: #2c1810;
    }

`

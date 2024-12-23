import styled from "styled-components";


export const Div_categoria = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
`
export default Div_categoria

export const Panel_categoria_books = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 10px;
    gap: 0.8rem;
    overflow: hidden;
`

export const Card_livros = styled.li`
    height: 300px;
    width: 500px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    background-color: #ffe0b7;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

`




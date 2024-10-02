import styled from 'styled-components'


const Topbar = styled.div`
    height: 4rem;    
    width: 100%;
    display: flex;
    justify-content: space-between;

`
export default Topbar

export const Inputsearch = styled.div`
        margin: 2rem;
        padding: 1rem;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;

        article {
            height: 2.8rem;
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            cursor: pointer;
            padding: 1rem;
            background-color: transparent;
            color: #D2B48C;
            border: none;
        }


        input {
            width: 80%;
            height: 2.8rem;
            padding: 1rem;
            border: solid 3px #CD853F;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: bolder;
            background-color: #DEB887;
            color: white;
        };

        input:focus {
            outline: none; 
        }


        button {
            height: 2.8rem;
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 1rem;
            background-color: transparent;
            color: #D2B48C;
            border: none;
        }

        
`;

export const Perfiluser = styled.div.attrs(() => ({
        'data-name': 'perfil-user'
}))`
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
`;






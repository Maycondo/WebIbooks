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
        width: 90%;
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
            width: 70%;
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
        margin: 2rem 0rem;
        padding: 1rem 0rem;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
        }

        h1 {
            font-size: 0.9rem;
            font-weight: 900;
            color: #2c1810;
        }

        section {
            height: 2.5rem;
            width: 2.5rem;
            margin: 1.5rem 2rem;
            cursor: pointer;
            padding: 0.5rem 0rem;
            border-radius: 50%;
            background-color: #CD853F;
            display: flex;
            text-align: center;
            align-content: center;
            justify-content: center;
            font-size: 1.6rem;
            transition: all ease 400ms;
        };

        section:hover {
            transition: all ease 400ms;
            background-color: #DEB887;
        };

        div {
            position: absolute;
            top: 70px; 
            right: 5%;
            border-radius: 15px;
            height: 200px;
            width: 200px;
            background-color: white;
            padding: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 2;
        }

        ul {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            font-size: 1rem;
            font-weight: bold;
            color: #2c1810;
            cursor: pointer;
        }
`;





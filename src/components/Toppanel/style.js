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
            z-index: 1;
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
            z-index: 1;
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
            z-index: 1;
        }

        div {
            position: absolute;
            top: 1%;
            height:  40rem;
            width: 70rem;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 8%;
            border-top-left-radius: 8%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #F5F5DC;
            display: flex;
            align-items: center;
            z-index: 0;
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
            background-color: #DEB887;
            display: flex;
            text-align: center;
            align-content: center;
            justify-content: center;
            font-size: 1.6rem;
            transition: all ease 400ms;
        };

        section:hover {
            transition: all ease 400ms;
            background-color: #CD853F;
        };

        div {
            position: absolute;
            top: 70px; 
            right: 5%;
            height: 180px;
            width: 200px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            background-color: #F5F5DC;
            padding: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 2;
        }

        ul {
            margin: 0%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            width: 100%;
            margin: 0%;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: bold;
            font-family: "Poppins", sans-serif;
            color: #2c1810;
            cursor: pointer;
            transition: all ease 400ms;
        }

        li:hover {
            color: #F5F5DC;
            transition: all ease 400ms;
            background-color:#DEB887;
        }
`;





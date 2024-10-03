
import { useState } from 'react';
import Toppanel from "./components/Toppanel/Toppanel.jsx"
import GlobalStyle, { Conteiner_nav, Conteiner_painel }  from './style/style.js'; 
 

/* Importação de icones para nav  */
import { TiHome } from "react-icons/ti";
import { SiBookstack } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";


function App() {

  const [actinveIcon, setActinveIcon ] = useState(null)


  const IconesNav = {
    home: <TiHome size={35} color={actinveIcon === "home" ? '#CD853F' : '#DEB887'}/>,
    book: <SiBookstack size={35} color={actinveIcon === "book" ? '#CD853F' : '#DEB887'}/>,
    heart: <AiFillHeart size={35} color={actinveIcon === "heart" ? '#CD853F' : '#DEB887'}/>,
    settings: <IoMdSettings size={35}color={actinveIcon === "settings" ? '#CD853F' : '#DEB887'}/>,
  }


  return (
    <>
      <GlobalStyle />
        <Conteiner_nav>
            <nav>
              <ul>
                  {Object.keys(IconesNav).map((key) => (
                    <li key={key}>
                        <a href={`#${key}`} onClick={() => setActinveIcon(key)} >
                          {IconesNav[key]}
                        </a>
                    </li>
                  ))}
              </ul>
            </nav>
        </Conteiner_nav> 
        <Conteiner_painel>
          <Toppanel />
        </Conteiner_painel>
    </>
  );
}


export default App
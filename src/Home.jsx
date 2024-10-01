
import GlobalStyle, { Conteiner } from './style/style.js'; 
 

/* Importação de icones para nav  */
import { TiHome } from "react-icons/ti";
import { IoBookSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";


function Home() {

  const IconesNav = {
    home: <TiHome size={30}/>,
    book: <IoBookSharp size={30}/>,
    heart: <AiFillHeart size={30}/>,
    settings: <IoMdSettings size={30}/>,
  }


  return (
    <>
      <GlobalStyle />
      <Conteiner>
          <nav>
            <ul>
                {Object.keys(IconesNav).map((key) => (
                  <li key={key}>
                      <a href={`#${key}`}>
                        {IconesNav[key]}
                      </a>
                  </li>
                ))}
            </ul>
          </nav>
      </Conteiner>
    </>
  );
}


export default Home
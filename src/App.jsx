import Toppanel from "./components/Toppanel/Toppanel.jsx"
import Loader from './components/Loader/Loader.jsx';
import GlobalStyle, { Conteiner_nav, Conteiner_painel }  from './style/style.js'; 
 

/* Importação de icones para nav  */
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { TiHome } from "react-icons/ti";
import { SiBookstack } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";


const useLoader = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay])
  return loading;
}

export default function App() {

  const [actinveIcon, setActinveIcon ] = useState(null)
  const loading = useLoader(4000)


  const IconesNav = {
    home: <TiHome size={35} color={actinveIcon === "home" ? '#CD853F' : '#DEB887'}/>,
    book: <SiBookstack size={35} color={actinveIcon === "book" ? '#CD853F' : '#DEB887'}/>,
    heart: <AiFillHeart size={35} color={actinveIcon === "heart" ? '#CD853F' : '#DEB887'}/>,
    settings: <IoMdSettings size={35}color={actinveIcon === "settings" ? '#CD853F' : '#DEB887'}/>,
  }

  if(loading) {
    return <Loader />
  }

  return (
    <>
      <GlobalStyle />
        <Conteiner_nav>
          <motion.div   initial={{ x: '-100%' }} animate={{ x: 0 }}transition={{ type: 'spring', stiffness: 50 }}>
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
            </motion.div>
        </Conteiner_nav> 
        <Conteiner_painel>
          <Toppanel />
        </Conteiner_painel>
    </>
  );
}

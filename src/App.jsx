import Toppanel from "./components/Toppanel/Toppanel.jsx";
import Panelhome from "./pages/Home/Panelhome.jsx";
import Loader from './components/Loader/Loader.jsx';
import GlobalStyle, { Conteiner_nav, Conteiner_painel } from './style/style.js'; 
import './style/style.css';

/* Importação de icones para nav  */
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { SiBookstack } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";


const useLoader = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return loading;
};

const variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};



export default function App() {
  const [navAnimation, setNavAnimation] = useState(false);
  const [activeIcon, setActiveIcon] = useState("home");
  const loading = useLoader(4000);

  const toggleNav = () => {
    setNavAnimation(!navAnimation);
  };

  const iconStyles = (key) => ({
    backgroundColor: activeIcon === key ? '#FFEFD5' : 'transparent',
    cursor: 'pointer', 
    transition: 'background-color 0.3s',
  });

  const IconesNav = {
    home: <TiHome size={35} color={activeIcon === "home" ? '#CD853F' : '#DEB887'} />,
    book: <SiBookstack size={35} color={activeIcon === "book" ? '#CD853F' : '#DEB887'} />,
    heart: <AiFillHeart size={35} color={activeIcon === "heart" ? '#CD853F' : '#DEB887'} />,
    settings: <IoMdSettings size={35} color={activeIcon === "settings" ? '#CD853F' : '#DEB887'} />,
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />

      <input id="burger-checkbox" type="checkbox" onClick={toggleNav} />
      <label className="burger" htmlFor="burger-checkbox">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <motion.div
        initial={false}
        style={{ position: 'fixed', zIndex: 5 }}
        className="conteiner_nav"
        animate={navAnimation ? "open" : "closed"}
        variants={variants}
      >
        <Conteiner_nav>
          <ul>
            {Object.keys(IconesNav).map((key) => (
              <li key={key} style={iconStyles(key)}>
                <a href={`#${key}`} onClick={() => setActiveIcon(key)}>
                  {IconesNav[key]}
                </a>
              </li>
            ))}
          </ul>
        </Conteiner_nav>
      </motion.div>

      <Conteiner_painel>
        <Toppanel />
        <Panelhome />
      </Conteiner_painel>
    </>
  );
}

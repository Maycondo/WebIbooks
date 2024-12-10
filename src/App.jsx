import Panelhome from "./pages/Home/Panelhome.jsx";
import Loader from './components/Loader/Loader.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import CategoriaIbooks from "./pages/Ibooks/panelIbooks.jsx"
import GlobalStyle, { Conteiner_nav, Conteiner_painel } from './style/style.js';
import './style/style.css';
import { useEffect, useState } from 'react';

// Função com uma tar de Loading ao carregar a Website
const useLoader = (delay) => {
  const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return loading;
};

export default function App() {

  const [navAnimation, setNavAnimation] = useState(false);
  const [activeName, setActiveName] = useState("Inicio");
  const loading = useLoader(4000);

  const toggleNav = () => {
    setNavAnimation(!navAnimation);
  };

  const resttiggleNav = () => {
    setNavAnimation(false);
  }

  const itemStyles = (key) => ({
    cursor: 'pointer', 
    fontWeight: activeName === key ? 'bold' : 'normal',
    transition: 'background-color 0.3s',
    color: activeName === key ? '#CD853F' : '#DEB887', 
  });

  // Uma objeto que amazenar todos os valores da Navbar
  const itensNav = {
    Inicio: 'Inicio', 
    book: 'Livros',
    heart: 'Favoritos', 
    settings: 'Configurações',
  };

  // Função com Switch que retorna todos um painel diferente de acordo com Navbar
  const renderPanelContent = () => {
      switch (activeName) {
          case 'Inicio':
            return <Panelhome />;
          case 'book':
            return <CategoriaIbooks/>
          case 'heart':
            return <div>Favoritos Component</div>;
          case 'settings':
            return <div>Configurações Component</div>;
          default:
            return <Panelhome />;
      }
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
      <AnimatePresence>
      { navAnimation && (
          <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.5, ease: 'easeInOut' }}style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#f5f3dc', zIndex: "5" }}>
              <Conteiner_nav>
                  <ul>
                    {Object.keys(itensNav).map((key) => (
                      <li key={key}>
                          <a href={`#${key}`} onClick={() => { setActiveName(key); resttiggleNav(); } } style={itemStyles(key)}>
                            {itensNav[key]}
                          </a>
                      </li>
                    ))}
                  </ul>
              </Conteiner_nav>
            </motion.div>
          )
        }
        </AnimatePresence>
      <Conteiner_painel>
          {renderPanelContent()}
      </Conteiner_painel>
    </>
  );
}

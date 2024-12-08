/* eslint-disable no-unused-vars */
import Topbar, { Inputsearch , Perfiluser } from "./style.js"
import DescriptionIbook from '../../components/BooksDiscripetion/DescriptionBooks.jsx';
import axios from "axios";
import { motion } from "framer-motion"
import BookCard from "./BookCard";
import "./Style.css"


// React Server Components
import { useRef, useState, useEffect } from 'react'
import { PiBooksFill } from "react-icons/pi"; 
import { FaSearch } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

const PANELS = {
  search: 'search',
  settings: "settings",
}


export default function Toppanel() {

  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState(null)
  const [activePanel, setActivePanel] = useState(null);


  useEffect(() => {
    if (!query.trim()) return;

    // Uma função assincrona para buscar de acordo com input livros da API do Google Books
    const fetchBooks = async () => {
      setIsLoading(true);
      setError(null);

      try {
          const response = await axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}`
          );
          setSearchBooks(response.data.items || []);
        } catch (Error) {
            setError("Erro ao buscar livros.");
        } finally {
            setIsLoading(false);
      }

    };

    const delayDebounce = setTimeout(() => fetchBooks(), 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);


  const inputRef = useRef(null);
  const settingsRef = useRef(null);
  const searchRef = useRef(null);

  // Uma função que pegar um evento de click na div 
  const togglePanel = (panel) => {
    setActivePanel((prevPanel) => (prevPanel === panel ? null : panel));
  };

  const handleInputChange = () => {
      setQuery(inputRef.current.value)
  }

  
  useEffect(() => {
    const handleClickOutside = (e) => {

      if (
        searchRef.current && !searchRef.current.contains(e.target) &&
        settingsRef.current &&
        !settingsRef.current.contains(e.target)
      ){
        togglePanel(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

    return (
        <>
        <Topbar>
          <Inputsearch ref={searchRef}>
              <article onClick={() => inputRef.current?.focus()} ><PiBooksFill/></article>
                <input type="text" ref={inputRef} onChange={handleInputChange} placeholder="Search your Ibook name, auhor, edition" onClick={() => togglePanel(PANELS.search)}/>
                {activePanel === PANELS.search && (
                  <div className="search-panel">
                      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                          <div className="conteiner_livros">
                            {isLoading && <p id="carregando">Carregando...</p>}{Error && <p className="error">{Error}</p>}
                            {!isLoading && !Error && (
                              <div className="book-list">
                                {/* Aplicando um Map para returna os livros pesquisado pelo usuários */}
                                {searchBooks.map((book, index) => (
                                  <BookCard key={book.index} book={book}/>
                                ))}
                              </div>
                              )}
                          </div>
                    </motion.div>
                  </div>
                )} 
              <button onClick={() => inputRef.current?.focus()} ><FaSearch /></button>
          </Inputsearch>

          <Perfiluser>
            <h1>Olá, João</h1>
              <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg" alt="Profile" />
                  <section onClick={() => togglePanel(PANELS.settings)} ref={settingsRef}>
                    <AiOutlineMore />
                  </section>             
                    {activePanel === PANELS.settings && (
                      <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: -20 },visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }}}>
                          <ul>  
                            <li onClick={() => togglePanel("perfil")}>Perfil</li>{ activePanel === "perfil" &&( <div style={{height: "400px", width: "400px", background: "red"}}>faeasfewefewgeerothr</div> )}
                            <li>Configurações</li>
                            <li>Sair</li>
                          </ul>
                      </motion.div>
                    )}
          </Perfiluser>
        </Topbar>
        </>
    )
}


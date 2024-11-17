import Topbar, { Inputsearch , Perfiluser } from "./style.js"
import { motion } from "framer-motion"

// React Server Components
import { useRef, useState, useEffect } from 'react'
import { PiBooksFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";




export default function Toppanel() {

  const [activePanel, setActivePanel] = useState(null)
  const inputRef = useRef(null);
  const settingsRef = useRef(null);
  const searchRef = useRef(null);

  const togglePanel = (panel) => {
    setActivePanel((prevPanel) => (prevPanel === panel ? null : panel));
  };

  function FocusInput() {
    if(inputRef.current) {
      inputRef.current.focus()
      togglePanel("search")
    }
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
              <article onClick={() => FocusInput()} ><PiBooksFill/></article>
                <input type="text" ref={inputRef} placeholder="Search your Ibook name, auhor, edition" onClick={() => togglePanel("search")}/>
                {activePanel === "search" && (
                    <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: -20 },visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }}}>

                    </motion.div>
                  )}
              <button onClick={() => FocusInput()} ><FaSearch /></button>
          </Inputsearch>
          <Perfiluser>
            <h1>Olá, João</h1>
              <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg" alt="Profile" />
                  <section onClick={() => togglePanel("settings")} ref={settingsRef}>
                    <AiOutlineMore />
                  </section>             
                    {activePanel === "settings" && (
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


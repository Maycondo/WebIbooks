import Topbar, { Inputsearch , Perfiluser } from "./style.js"
import { useRef, useState } from 'react'

import { PiBooksFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

function Toppanel() {
  
  const [showSettings, setshowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null)

  const toggleSenttins = () => {
    setshowSettings(!showSettings)
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  function FocusInput() {
    if(inputRef.current) {
      inputRef.current.focus()
      toggleSearch()
    }
  }

    return (
        <>
        <Topbar>
          <Inputsearch>
              <article onClick={() => FocusInput()} ><PiBooksFill/></article>
                <input type="text" ref={inputRef} placeholder="Search your Ibook" onClick={toggleSearch}/>
                {showSearch && (
                    <h1>tetse</h1>
                  )}
              <button onClick={() => FocusInput()} ><FaSearch /></button>
          </Inputsearch>
          <Perfiluser>
            <h1>Olá, João</h1>
              <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg" alt="Profile" />
                  <section onClick={toggleSenttins}>
                    <AiOutlineMore />
                  </section>             
                    {showSettings &&(
                      <div>
                        <ul>  
                          <li>Perfil</li>
                          <li>Configurações</li>
                          <li>Sair</li>
                        </ul>
                      </div>
                    )}
          </Perfiluser>
        </Topbar>
        </>
    )
}

export default Toppanel


import Topbar, { Inputsearch , Perfiluser } from "./style.js"
import { useRef } from 'react'

import { PiBooksFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

function Toppanel() {

  const inputRef = useRef(null)

  function FocusInput() {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }
  
    return (
        <>
        <Topbar>
          <Inputsearch>
              <article onClick={() => FocusInput()} ><PiBooksFill/></article>
                <input type="text" ref={inputRef} placeholder="Search your Ibook" />
              <button onClick={() => FocusInput()} ><FaSearch /></button>
          </Inputsearch>
          <Perfiluser>
            <img src="" alt="" />
              <p>Olá, João</p>
                  <section>
                    <p><AiOutlineMore /></p>
                  </section>
          </Perfiluser>
        </Topbar>
        </>
    )
}

export default Toppanel


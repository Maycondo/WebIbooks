/* eslint-disable react/prop-types */

import { Settinguser } from "./style.js"
import { motion } from "framer-motion"
import { AiOutlineMore } from "react-icons/ai";


export default function SenttingsUser({ Panels, activePanel, togglePanel, settingsRef }) {
    return (
        <Settinguser>
            <h1>Olá, João</h1>
            <img src="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg" alt="Profile" />
                <section onClick={() => togglePanel(Panels.settings)} ref={settingsRef}>
                    <AiOutlineMore />
                </section>             
                    {activePanel === Panels.settings && (
                    <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: -20 },visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }}}>
                        <ul>
                            <li><a href=""></a>Perfil</li>
                            <li><a href=""></a>Configurações</li>
                            <li><a href=""></a>Sair</li>                             
                        </ul>
                    </motion.div>
                    )}
        </Settinguser>
    )
}
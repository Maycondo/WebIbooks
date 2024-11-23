import { motion, AnimatePresence } from 'framer-motion';
import "./style.css";
import { useEffect, useState } from 'react';


const Textanimeiton = () => {

    const name = "João"
    const [mensagensIndex, setMensagensIndex] = useState(0);
    const [mensagens] = useState([
        `"Olá! ${name}, seja bem-vindo."`,
        "Confira a lista do iBooks com os livros mais bem avaliados.\nDescubra sua próxima leitura favorita!",
        "Aqui você pode compartilhar seus favoritos!\nVamos criar algo incrível juntos.",
    ]);

    const [mensagensIndex2, setMensagensIndex2] = useState(0);
    const [mensagens2] = useState([
        "Você está procurando por um novo livro?",
        "Aqui você pode encontrar livros de todos os gêneros!",
        "Não perca a oportunidade de descobrir sua próxima leitura favorita!",
    ]);

    // Função para alternar entre mensagens em intervalo
    useEffect(() => {
        const interval = setInterval(() => {
            setMensagensIndex((prev) => (prev + 1) % mensagens.length);
            setMensagensIndex2((prev) => (prev + 1) % mensagens2.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [mensagens.length, mensagens2.length]);



    return (
        <div className="container">
        <AnimatePresence mode="wait">
                <motion.div 
                    key={mensagensIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ fontSize: "4rem", color: "#2c1810", fontWeight: "600", textAlign: "center" }}
                >
                    {mensagens[mensagensIndex]}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ fontSize: "2rem", color: "#424241", fontWeight: "400", textAlign: "center" }}
                >
                    {mensagens2[mensagensIndex2]}
                </motion.div>
          </AnimatePresence>

        </div>
    )
}



export default Textanimeiton
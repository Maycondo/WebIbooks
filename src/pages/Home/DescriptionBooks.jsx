/* eslint-disable react/prop-types */

import {useState} from "react";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import "./style.css";



const DescriptionIbook = ({ selectedBook, onClose }) => {
    const [isCLicked, setIsclicked] = useState(false)
    const [clickedSheder, setClickedsheder] = useState(false);
    if (!selectedBook) return null;


    const averageRating = selectedBook.volumeInfo.averageRating || 0;

    const handleButtonclicked = () => {
        setIsclicked(!isCLicked)
    }

    const handleButtonclickedSheder = () => {
        setClickedsheder(!clickedSheder)
    }

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
    };



    return (
        <motion.div className="description_ibook" variants={containerVariants}initial="hidden" animate="visible"exit="exit">
            <button className="close-button" onClick={onClose}>
                <AiOutlineClose />
            </button>
            <motion.img src={selectedBook.coverUrl} alt={selectedBook.volumeInfo.title} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}  transition={{ duration: 0.5, ease: "easeOut" }}/>
                <motion.div className="Description" variants={childVariants}>
                    <h2>{selectedBook.volumeInfo.title}</h2>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ marginRight: "20px" }}>Avaliação:</p>
                        <ReactStars count={5} value={averageRating} size={35} isHalf={true} edit={false}activeColor="#ffd700"/>
                    </div>
                    <p>{selectedBook.volumeInfo.description}</p>
                    <div className="div_buttons">
                        <FaShareAlt className="share-button" onClick={handleButtonclickedSheder} style={{color: clickedSheder ? "#CD853F" : "black"}}></FaShareAlt>
                        <FaHeart className="Heart-button" onClick={handleButtonclicked} style={{color: isCLicked ? "#CD853F" : "black"}}></FaHeart>
                    </div>
                    <h3>Author: {selectedBook.author?.join(", ")}</h3>
                    <h4>Published:{selectedBook.published}</h4>
                </motion.div>
        </motion.div>
    );
};

export default DescriptionIbook;

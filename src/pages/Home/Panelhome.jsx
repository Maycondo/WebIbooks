import { useEffect, useState } from 'react';
import Toppanel from "../../components/Toppanel/Toppanel.jsx";
import { motion } from 'framer-motion';
import "./style.css"


const Panelhome = () => {


        const [cardClick, setCardClick] = useState(null)
        const [cardIndex, setCardIndex] = useState(0);
        
        const [ibooks] = useState([
            { title: "Beauty and the Beast", author: "Disney", img: "https://m.media-amazon.com/images/I/91cFpFUJFnL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Fire and Blood", author: "George R. R. Martin", img: "https://m.media-amazon.com/images/I/81pa0QoG6ML._AC_UF1000,1000_QL80_.jpg" },
            { title: "The Chronicles of Narnia", author: "C. S. Lewis", img: "https://m.media-amazon.com/images/I/81KxkoyrxBL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Deadpool Samurai", author: "Marvel", img: "https://m.media-amazon.com/images/I/911rBJQtB5L._UF894,1000_QL80_.jpg" },
            { title: "The Hobbit", author: "J.R.R. Tolkien", img: "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", img: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg" },
            { title: "1984", author: "George Orwell", img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg" },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg" },
            { title: "To Kill a Mockingbird", author: "Harper Lee", img: "https://m.media-amazon.com/images/I/81OtwkiB1-L._AC_UF1000,1000_QL80_.jpg" },
            { title: "Moby Dick", author: "Herman Melville", img: "https://m.media-amazon.com/images/I/81PVkkUjyDL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Pride and Prejudice", author: "Jane Austen", img: "https://m.media-amazon.com/images/I/91HHqVTAJQL._AC_UF1000,1000_QL80_.jpg" },
            { title: "The Catcher in the Rye", author: "J.D. Salinger", img: "https://m.media-amazon.com/images/I/71V8twaKmtL._AC_UF1000,1000_QL80_.jpg" },
            { title: "The Hunger Games", author: "Suzanne Collins", img: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg" }, // Nova URL
            { title: "Dune", author: "Frank Herbert", img: "https://images-na.ssl-images-amazon.com/images/I/41CDpCsjOQL._SX331_BO1,204,203,200_.jpg" }, // Nova URL
            { title: "The Lord of the Rings", author: "J.R.R. Tolkien", img: "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg" }
        ]);
        
              
        const handleCardClick = (index) => {
            setCardClick(index === cardIndex ? null : index)
            setCardIndex(index);
        }

        useEffect(() => {
            const CardAnimetion = setTimeout(() => {
                setCardIndex((prevIndex) => (prevIndex + 1)  % ibooks.length);
                setCardClick(false);
            }, 3000);

            return () => clearTimeout(CardAnimetion)
        }, [cardIndex , ibooks.length])

        const slideAnimation = {
            animate: {
                x: [0, -5890],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 100,
                        ease: "linear"   
                    }
                },
            },
        };

        return (
            <> 
               <Toppanel />
                    <div className="container">
                        {
                            
                        }
                    </div>
                <motion.div
                    className="container_cards flex space-x-8"
                    style={{ width: 'max-content' }}  
                    {...slideAnimation}
                >
                    {ibooks.map((book, index) => (
                        <div key={index} className="card_container">
                            <div
                                className={`card ${index === cardClick ? 'clicked' : ''} ${index === cardIndex ? 'active' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <img src={book.img} alt={book.title} style={{ width: '100%', borderRadius: '10px' }} />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </>
        );
    };

export default Panelhome;

import { useEffect, useState } from 'react';
import "./style.css"


    const Panelhome = () => {


        const [cardClick, setClickCarde] = useState(null)
        const [cardIndex, setCardIndex] = useState(0);
        const [ibooks] = useState([
            { title: "Beauty and the Beast", author: "Disney", img: "https://m.media-amazon.com/images/I/91cFpFUJFnL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Fire and Blood", author: "George R. R. Martin", img: "https://m.media-amazon.com/images/I/81pa0QoG6ML._AC_UF1000,1000_QL80_.jpg" },
            { title: "The Chronicles of Narnia", author: "C. S. Lewis", img: "https://m.media-amazon.com/images/I/81KxkoyrxBL._AC_UF1000,1000_QL80_.jpg" },
            { title: "Deadpool Samurai", author: "Marvel", img: "https://m.media-amazon.com/images/I/911rBJQtB5L._UF894,1000_QL80_.jpg" },
            
        ]);

        const handleCardClick = (index) => {
            setClickCarde(index === cardIndex ? null : index)
            setCardIndex(index);
        }

        useEffect(() => {
            const CardAnimetion = setTimeout(() => {
                setCardIndex((prevIndex) => (prevIndex + 1)  % ibooks.length);
                setClickCarde(false);
            }, 3000);

            return () => clearTimeout(CardAnimetion)
        }, [cardIndex , ibooks.length])



  return (
    <>
    <div className="container">

    </div>
    <div className="container_cards">
        {ibooks.map((book, index) => (
            <div key={index}>
                <div className={`card ${index === cardClick ? 'clicked' : ''} ${index === cardIndex ? 'active' : ''}`} onClick={() => handleCardClick(index)}>
                    <img src={book.img} alt={book.title} style={{ width: '100%', borderRadius: '10px' }} />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  );
};

export default Panelhome;

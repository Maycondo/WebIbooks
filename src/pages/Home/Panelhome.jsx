import { useEffect, useState } from 'react';
import Toppanel from "../../components/Toppanel/Toppanel.jsx";
import axios from "axios";
import { motion } from 'framer-motion';
import "./style.css";

const Panelhome = () => {

    const [cardClick, setCardClick] = useState(null); 
    const [cardIndex, setCardIndex] = useState(0);
    const [ibooks, setBooks] = useState([]);

    useEffect(() => {
        // Uma função assincrona para fazer um requisão consumindo API de livros 
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                    params: {
                        q: 'top rated books', 
                        orderBy: 'relevance',
                        maxResults: 40,
                    },
                });

                const booksWithRatings = response.data.items
                    .filter(book => book.volumeInfo.averageRating && book.volumeInfo.industryIdentifiers)
                    .map(book => {
                        const isbn = book.volumeInfo.industryIdentifiers[0]?.identifier;
                        const googleBooksExtraLarge = book.volumeInfo.imageLinks?.extraLarge || book.volumeInfo.imageLinks?.thumbnail;

                        // Se Google Books tiver a imagem de capa em "extraLarge"
                        const openLibraryCoverUrl = `https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
                        const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl;

                        return {
                            ...book,
                            coverUrl,
                            fallbackCoverUrl: 'url_para_uma_imagem_placeholder',
                        };
                    });

                booksWithRatings.sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating);

                // Define a lista de livros repetida três vezes para animação
                setBooks([...booksWithRatings, ...booksWithRatings, ...booksWithRatings]);
                
            // Caso não consiguir buscar os Livros, a parecera um ERRO no tela.
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };

        fetchBooks();

    }, []);

    const handleCardClick = (index) => {
        setCardClick(index === cardIndex ? null : index);
        setCardIndex(index);
    };

    const slideAnimation = {
        animate: {
            x: [0, -3490],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <> 
            <Toppanel />
            <div className="container">
                {/* Adicione qualquer conteúdo adicional aqui */}
            </div>
            <motion.div className="container_cards flex space-x-8" style={{ width: 'max-content' }}{...slideAnimation}>
                {ibooks.map((book, index) => (
                    <div key={index} className="card_container">
                        <div className={`card ${index === cardClick ? 'clicked' : ''} ${index === cardIndex ? 'active' : ''}`}
                            onClick={() => handleCardClick(index)} >
                            <img src={book.coverUrl} style={{ width: '100%', borderRadius: '10px' }} />
                            <h3>{book.volumeInfo.title}</h3>
                            <p>{book.volumeInfo.authors?.join(', ')}</p>
                            <p>{book.volumeInfo.averageRating}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Panelhome;

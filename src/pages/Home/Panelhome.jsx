import { useEffect, useState } from 'react';
import Textanimeiton from './Textsanimetion.jsx';
import ReactStars from "react-rating-stars-component";
import Toppanel from "../../components/Toppanel/Toppanel.jsx";
import DescriptionIbook from './DescriptionBooks.jsx';
import axios from "axios";
import { motion } from 'framer-motion';
import "./style.css";



const Panelhome = () => {
    // Hook para mostra a descrição do livro feita pelo usuário
    const [selectedBook, setSelectedBook] = useState(null);

    const useFetchBooks = () => {

        const [ibooks, setBooks] = useState([]);

        useEffect(() => {

            // Uma função assincrona para buscar organizar livros dda API do Google Books
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
                        // Fitrando API de ibooks para returna em orde os mais valiados
                        .filter(book => book.volumeInfo.averageRating && book.volumeInfo.industryIdentifiers)
                        .map(book => {
                            const isbn = book.volumeInfo.industryIdentifiers[0]?.identifier;

                            
                            const googleBooksExtraLarge = book.volumeInfo.imageLinks?.extraLarge || book.volumeInfo.imageLinks?.thumbnail;
                            const openLibraryCoverUrl = `https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
                            const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl;
    
                            return {
                                ...book,
                                coverUrl,
                            };
                        });
    
                    booksWithRatings.sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating);
    
                    setBooks([...booksWithRatings, ...booksWithRatings, ...booksWithRatings]);
                } catch (error) {
                    console.error('Erro ao buscar livros:', error);
                }
            };
    
            fetchBooks();
        }, []);
    
        return ibooks;
    };
    
    // Atribuindo o novo nome para Função que estar amarzenando a funcão assincrinar da API
    const ibooks = useFetchBooks()


    // Animaçao de loop infinito para os livros mais avaliados.
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
                <Textanimeiton></Textanimeiton>
            {/* Aplicando animação nos cards utilizando bliblioteca Frame-Motion */}
            <motion.div className="container_cards flex space-x-8" style={{ width: 'max-content' }}{...slideAnimation}>
                {/* Percorrendo API de livros com Map e voltando todos os valores para o cards. */}
                    {ibooks.map((book, index) => (
                        <div key={index} className="card_container">
                            <div className="card" onClick={() => setSelectedBook(book, index)}>
                                <img src={book.coverUrl} style={{ width: '100%', borderRadius: '10px' }}/>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(', ')}</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <p style={{ marginRight: "8px", alignItems: "center" }}>Avaliação:</p>
                                    <ReactStars count={5} value={book.volumeInfo.averageRating} size={24} isHalf={true} edit={false}activeColor="#ffd700" />
                                </div>
                            </div>
                        </div>
                    ))}
            </motion.div>
            <DescriptionIbook selectedBook={selectedBook} onClose={() => setSelectedBook(null)}></DescriptionIbook>
        </>
    );
};

export default Panelhome;

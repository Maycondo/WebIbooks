import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from 'react';
import{ Div_categoria} from './style.js'
import "./style.css"

import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function Categoria({ selectedCategoria }) {
  const [books, setBooks] = useState([]);
  const [isGridView , setIsGridView] = useState()

  useEffect(() => {
    const fetchBooks = async () => {
      if (!selectedCategoria) return;
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${selectedCategoria}&orderBy=relevance&maxResults=9`
        );
        const data = await response.json();
        const bookscategoria = data.items
          .filter((book) => book.volumeInfo.industryIdentifiers)
          .map((book) => {
            const isbn = book.volumeInfo.industryIdentifiers[0]?.identifier;

            const googleBooksExtraLarge = book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.extraLarge;
            const openLibraryCoverUrl = isbn?`https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg` : null;
            const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl;

            

            return coverUrl
              ? {
                coverUrl,
                title: book.volumeInfo.title || "Título Desconhecido",
                subtitle: book.volumeInfo.subtitle || "",
                price: book.saleInfo?.listPrice?.amount || "N/A",
                rating: book.volumeInfo.averageRating || 0,
              }
            : null;
          })
          .filter((book) => book !== null) 
          .sort((a , b) => b.rating - a.rating)

        setBooks(bookscategoria);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, [selectedCategoria]);

  return (
    <Div_categoria>
          <div className="Barra_superior">
            <h2>For You!</h2>
              <div className="Buttons_Style_categoria">
                <button onClick={() => setIsGridView(true)} style={{ color: isGridView ? "#2c1810" :  "#CD853F" }}><AiFillAppstore/></button>
                <button onClick={() => setIsGridView(false)} style={{ color: !isGridView ? "#2c1810" :  "#CD853F" }}><AiOutlineAppstore/></button>
              </div>
          </div>
        <div className={isGridView  ? "Panel_categoria_books grid_view" :  "Panel_categoria_books list_view"}>
            {books.map((ibook, index) => (
                  <div className={isGridView  ? "Card_descrition_on" :  "Card_descrition_of"} key={index}>
                      <img src={ibook.coverUrl} alt={ibook.title}/>
                      <div className="AboutBook" >
                          <h3>{ibook.title}</h3>
                          <div className="card_evaluation">
                            <p style={{ marginRight: "4px", alignItems: "center" }}>Avaliação:</p>
                            <ReactStars count={5} value={ibook.rating} size={22} isHalf={true} edit={false} activeColor="#ffd700" />
                          </div>
                          <div style={{display: "flex", justifyContent: "center"}}>
                              <button className="see_more"><a href="" target="_blank">ver mais</a></button>   
                          </div>
                      </div>
                </div>
            ))}
        </div>
    </Div_categoria>
  );
}

export default Categoria;

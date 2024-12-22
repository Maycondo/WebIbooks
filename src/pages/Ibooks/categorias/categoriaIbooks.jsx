import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from 'react';
import Div_categoria from './style.js'
import "./style.css"


// eslint-disable-next-line react/prop-types
function Categoria({ selectedCategoria }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!selectedCategoria) return;
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${selectedCategoria}&orderBy=relevance&maxResults=10`
        );
        const data = await response.json();
        const bookscategoria = data.items
          .filter((book) => book.volumeInfo.industryIdentifiers)
          .map((book) => {
            const isbn = book.volumeInfo.industryIdentifiers[0]?.identifier;

            const googleBooksExtraLarge = book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.extraLarge;
            const openLibraryCoverUrl = `https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
            const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl;

            

            return {
              coverUrl,
              title: book.volumeInfo.title || "Título Desconhecido",
              subtitle: book.volumeInfo.subtitle || "",
              price: book.saleInfo?.listPrice?.amount || 'N/A',
              rating: book.volumeInfo.averageRating || 0,
            };
          })

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
          <div>
            <h2>Ibooks para voce!</h2> <p></p>
          </div>
          <div className="Panel_categoria_books">
            {books.map((ibook, index) => (
                  <li className="card_livros" key={index}>
                      <img src={ibook.coverUrl} alt={ibook.title}/>
                      <div className="AboutBook" >
                          <h3>{ibook.title}</h3>
                          <div className="card_evaluation">
                            <p style={{ marginRight: "4px", alignItems: "center" }}>Avaliação:</p>
                            <ReactStars count={5} value={ibook.rating} size={30} isHalf={true} edit={false} activeColor="#ffd700" />
                          </div>
                          <div style={{display: "flex", justifyContent: "center"}}>
                              <button className="see_more"><a href="" target="_blank">ver mais</a></button>   
                          </div>
                      </div>
                </li>
            ))}
        </div>
    </Div_categoria>
  );
}

export default Categoria;

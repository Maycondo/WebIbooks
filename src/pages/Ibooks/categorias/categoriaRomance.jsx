
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from 'react';
import "./style.css"


function CategoriaRomance() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchRomanceBooks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=romance&orderBy=relevance&maxResults=22'
        );
        const data = await response.json();
        const booksRomance = data.items
          .filter((book) =>book.volumeInfo.industryIdentifiers)
          .map((book) => {
            const isbn = book.volumeInfo.industryIdentifiers[0]?.identifier;

            const googleBooksExtraLarge = book.volumeInfo.imageLinks?.extraLarge || book.volumeInfo.imageLinks?.thumbnail;
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

        setBooks(booksRomance);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchRomanceBooks();
  }, []);
   
  return (
    <div className="Panel_categoria">
      {books.map((ibook, index) => (
            <li className="card_livros" key={index}>
                <img src={ibook.coverUrl} alt={ibook.title}/>
                <h3>{ibook.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ marginRight: "4px", alignItems: "center" }}>Avaliação:</p>
                    <ReactStars count={5} value={ibook.rating} size={20} isHalf={true} edit={false} activeColor="#ffd700" />
                </div>
          </li>
      ))}
    </div>
  );
}

export default CategoriaRomance;

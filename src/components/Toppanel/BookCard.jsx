/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from 'react';
import React from "react";
import DescriptionIbook from '../../components/BooksDiscripetion/DescriptionBooks.jsx';
import "./Style.css";


const BookCard = ({ book }) => {
  const { volumeInfo } = book;
  const [selectedBook, setSelectedBook] = useState(null);

  const googleBooksExtraLarge = volumeInfo.imageLinks?.extraLarge || volumeInfo.imageLinks?.thumbnail;
  const openLibraryCoverUrl = volumeInfo.imageLinks?.thumbnail;
  const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl || "https://via.placeholder.com/120x150";

  return (
    <>
      <div className="card-container_serch" onClick={() => setSelectedBook(book)}>
          <img src={coverUrl} alt={`Capa do livro ${volumeInfo.title}`} />
          <h3 className="book-title">{volumeInfo.title}</h3>
          <p className="book-author">{volumeInfo.authors?.join(", ") || "Autor desconhecido"}</p>
          <p className="book-rating">Avaliação: {volumeInfo.averageRating || "N/A"}</p>
      </div>
      {selectedBook && (<DescriptionIbook selectedBook={selectedBook} onClose={() => setSelectedBook(null)}/>)}
    </>
  );
};

export default BookCard;

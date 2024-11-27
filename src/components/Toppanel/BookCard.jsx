/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Style.css";

const BookCard = ({ book }) => {
  const { volumeInfo } = book;

  const googleBooksExtraLarge = volumeInfo.imageLinks?.extraLarge || volumeInfo.imageLinks?.thumbnail;
  const openLibraryCoverUrl = volumeInfo.imageLinks?.thumbnail;
  const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl || "https://via.placeholder.com/120x150";

  return (
    <div className="card-container_serch">
      <img src={coverUrl} alt={`Capa do livro ${volumeInfo.title}`} />
      <h3 className="book-title">{volumeInfo.title}</h3>
      <p className="book-author">{volumeInfo.authors?.join(", ") || "Autor desconhecido"}</p>
      <p className="book-rating">Avaliação: {volumeInfo.averageRating || "N/A"}</p>
    </div>
  );
};

export default BookCard;

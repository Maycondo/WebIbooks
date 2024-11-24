/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const BookCard = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <div className="card-container">
      <img
        src={volumeInfo?.imageLinks?.thumbnail || ""}
        alt={`Capa do livro ${volumeInfo.title}`}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{volumeInfo.title}</h3>
      <p>{volumeInfo.authors?.join(", ") || "Autor desconhecido"}</p>
      <p>Avaliação: {volumeInfo.averageRating || "N/A"}</p>
    </div>
  );
};

export default BookCard;

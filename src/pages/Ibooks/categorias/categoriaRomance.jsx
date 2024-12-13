/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from 'react';


function categoriaRomance() {
  const useFetchBooks = () => {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
      const fetchRomanceBooks = async () => {
        try {
          const response = await fetch(
            'https://www.googleapis.com/books/v1/volumes?q=romance&orderBy=relevance&maxResults=40'
          );
          const data = await response.json();

          const BooksRomance = data.items
            .filter(
              (book) =>
                book.volumeInfo.categories?.includes("Romance") &&
                book.volumeInfo.industryIdentifiers
            )
            .map((books) => {
              const isbn = books.volumeInfo.industryIdentifiers[0]?.identifier;

              const googleBooksExtraLarge =
                books.volumeInfo.imageLinks?.extraLarge ||
                books.volumeInfo.imageLinks?.thumbnail;
              const openLibraryCoverUrl = `https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
              const coverUrl = googleBooksExtraLarge || openLibraryCoverUrl;

              return {
                coverUrl,
                title: books.volumeInfo.title,
                subtitle: books.volumeInfo.subtitle,
                authors: books.volumeInfo.authors?.join(', '),
                price: books.saleInfo?.listPrice?.amount || 'N/A',
                rating: books.volumeInfo.averageRating || 'No rating',
              };
            });

          setBooks(BooksRomance);
        } catch (error) {
          console.error(error);
        }
      };

      fetchRomanceBooks();
    }, []);

    return Books;
  };

  const RomanceIbooks = useFetchBooks();

  return (
    <div>
      {RomanceIbooks.map((ibook, index) => (
        <div key={index}>
          <div>
            <img src={ibook.coverUrl} alt={ibook.title} style={{ width: '100%', borderRadius: '10px' }}/>
            <h2>{ibook.title}</h2>
            <p>{ibook.price}</p>
            <p>{ibook.subtitle}</p>
            <p>{ibook.authors}</p>
            <p>{ibook.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default categoriaRomance;

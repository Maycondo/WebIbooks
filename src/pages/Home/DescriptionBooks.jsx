/* eslint-disable react/prop-types */
import "./style.css";



const DescriptionIbook = ({selectedBook, onClose}) => {
    if(!selectedBook) return null;  



    return (
        <div className="description_ibook">
            <button className="close-button" onClick={onClose}>x</button>
                <img src={selectedBook.coverUrl}/>
                <div>
                    <h2>{selectedBook.volumeInfo.title}</h2>
                    <p>{selectedBook.volumeInfo.averageRating}</p>
                    <p>{selectedBook.volumeInfo.description}</p>
                    <h3>Author: {selectedBook.author?.join(', ')}</h3>
                    <h4>Published: {selectedBook.published}</h4>
                </div>
        </div>
    )    
}


export default DescriptionIbook
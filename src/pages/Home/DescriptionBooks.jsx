/* eslint-disable react/prop-types */
import "./style.css";
import ReactStars from "react-rating-stars-component";



const DescriptionIbook = ({selectedBook, onClose}) => {
    if(!selectedBook) return null;  

    const averageRating = selectedBook.volumeInfo.averageRating || 0;

    return (
        <div className="description_ibook">
            <button className="close-button" onClick={onClose}>x</button>
                <img src={selectedBook.coverUrl}/>
                <div className="discreption">
                    <h2>{selectedBook.volumeInfo.title}</h2>    
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ marginRight: "20px", }}>Avaliação:</p>
                        <ReactStars count={5} value={averageRating} size={35} isHalf={true} edit={false}activeColor="#ffd700" />
                    </div>
                    <p>{selectedBook.volumeInfo.description}</p>
                    <h3>Author: {selectedBook.author?.join(', ')}</h3>
                    <h4>Published: {selectedBook.published}</h4>
                </div>
        </div>
    )    
}


export default DescriptionIbook
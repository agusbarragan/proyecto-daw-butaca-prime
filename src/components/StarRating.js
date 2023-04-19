import { useState } from 'react';
import BackButton from './BackButton';
import NavigationBar from './Navbar';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import firebaseApp from '../firebase-config';

const MovieReview = () => {

  //Tengo que añadir a cada caja de comentarios su usuario, que se guarden en la propia pagina los comentarios y poder borrarlos.
  const db = getFirestore(firebaseApp);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  addDoc(collection(db, 'reseñas'),{
    comentarios: comment,
  })
    
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCancelClick = () => {
    setRating(0);
    setComment('');
  };

  const handleSaveClick = () => {
    if (rating === 0 || comment === '') {
      return;
    }

    const newReview = {
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setComment('');
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? 'star selected' : 'star'}
        onClick={() => handleStarClick(i)}
      >
        ★
      </span>
    );
  }

  return (
    <>
    <NavigationBar />
    <div className="movie-review">

      <h2 className='text-light'>Deja tu opinión:</h2>

      <div className="stars text-light display-6">{stars}</div>

      <div className='d-flex justify-content-center align-items-center'>
         <textarea
        placeholder="Escribe tu reseña aquí"
        value={comment}
        onChange={handleCommentChange}
        style={{maxWidth: '40%', justifyItems: 'center'}}
        className='input-group'
      />
      </div>

      <div className="buttons">
        <button onClick={handleSaveClick} className='btn btn-primary me-2 mb-2'>Enviar</button>
        <button onClick={handleCancelClick} className='btn btn-secondary me-2 mb-2'>Cancelar</button>
      </div>

      {reviews.length > 0 && (
        <div className="reviews">
          <h2 class='text-light'>Reseñas:</h2>
          <ul>
            {reviews.map((review, index) => (
              <li class='list-unstyled' key={index}>
                <p class='container text-start text-light' style={{width:'100%'}}>{review.comment}</p>
                <p class='text-light'>Puntuación: {review.rating} estrellas</p>
                <hr></hr>
              </li>
            ))}
          </ul>
        </div>
      )}

      <BackButton />

    </div>
    </>
  );
};

export default MovieReview;

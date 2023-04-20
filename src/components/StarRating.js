import { useState, useEffect } from 'react';
import BackButton from './BackButton';
import NavigationBar from './Navbar';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp, { auth } from '../firebase-config';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

const MovieReview = () => {

  //Tengo que añadir a cada caja de comentarios su usuario, que se guarden en la propia pagina los comentarios y poder borrarlos.
  const db = getFirestore(firebaseApp);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);
  const [usuario, setUsuario] = useState(null);

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


  const handleDeleteClick = async (reviewId) => {
    try {
      setReviews(reviews.filter((review) => review !== reviewId));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };


  return (
    <>
    <NavigationBar />
    <div className="movie-review">

      <h2 className='text-light'>Deja tu opinión:</h2>
      <h3 className='text-light'>Valóranos</h3>

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
                <p className='text-light float-end'>{auth.currentUser.email}</p>
                <p class='container text-start text-light' style={{width:'100%'}}>{review.comment}</p>
                <button class='btn btn-danger m-2' onClick={handleDeleteClick}>Borrar</button>
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

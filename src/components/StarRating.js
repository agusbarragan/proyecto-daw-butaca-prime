import { useState } from 'react';
import BackButton from './BackButton';
import NavigationBar from './Navbar';

const MovieReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

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
      <p>Deja tu opinión:</p>
      <div className="stars">{stars}</div>
      <textarea
        placeholder="Escribe tu reseña aquí"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="buttons">
        <button onClick={handleSaveClick}>Enviar</button>
        <button onClick={handleCancelClick}>Cancelar</button>
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

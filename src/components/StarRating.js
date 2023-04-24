import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, onSnapshot, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import firebaseApp, { auth } from '../firebase-config';
import NavigationBar from './Navbar';
import BackButton from './BackButton';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const db = getFirestore(firebaseApp);
  const usuario = auth.currentUser.email;

  const addReview = async (event) => {
    event.preventDefault();
    if (!newReview.trim()) {
      alert('El comentario no puede estar en blanco');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'reseñas'), {
        comentarios: newReview,
        fecha: serverTimestamp(),
        usuarioEmail: usuario,
      });
      console.log('Document written with ID: ', docRef.id);
      setNewReview(''); // limpiamos el campo de entrada
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };
  
  const deleteReview = async (id, reviewEmail) => {
    if (usuario && usuario === reviewEmail) {
      await deleteDoc(doc(db, 'reseñas', id));
    } else {
      alert("Usuario no autorizado para borrar esta reseña");
    }
  };
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'reseñas'), (snapshot) => {
      const newReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        comentarios: doc.data().comentarios,
        usuarioEmail: doc.data().usuarioEmail,
      }));
      setReviews(newReviews);
    });
    return unsubscribe;
  }, [db]);

  return (
    <>
      <NavigationBar />
      <div className='movie-review'>
        <h1 className='text-light'>Comentarios</h1>

        <div className='d-flex justify-content-center align-items-center'>
          <form onSubmit={addReview} className=''>
            <input className='input-group' type="text" value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder='Escribe tu reseña aquí' />
            <button type="submit" className='btn btn-primary'>Enviar</button>
          </form>
        </div>

        <div className='d-flex justify-content-center'>
            {reviews.map((review) => (
              <div key={review.id} className='card my-2 w-25 m-2'>
                
                <div className='card-body'> 
                 <p className='card-text'>{review.comentarios} {review.usuarioEmail}</p>
                </div>

                <div className='card-footer'>
                    {review.usuarioEmail === usuario && (
                      <button onClick={() => deleteReview(review.id, review.usuarioEmail)} className='btn btn-danger'>Eliminar</button>
                )}                
                </div>
              </div>
            ))}
        </div>
      </div>
      <BackButton />
    </>
  );
}

export default Reviews;

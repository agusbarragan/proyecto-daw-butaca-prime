import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, onSnapshot, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import firebaseApp, { auth } from '../firebase-config';
import NavigationBar from './Navbar';
import BackButton from './BackButton';
import { Button, Modal } from 'react-bootstrap';
import { Footer } from './Footer';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const db = getFirestore(firebaseApp);
  const usuario = auth.currentUser.email;

  // Añado la reseña a la base de datos a la coleccion 'reseñas' en Firestore
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
      console.log('ID del documento: ', docRef.id);
      setNewReview(''); // limpiamos el campo de entrada
    } catch (error) {
      console.error('Error al añadir la reseña: ', error);
    }
  };

  // Controlo si el usuario logueado puede borrar su reseña
  const handleShowModal = (id, reviewEmail) => {
    if (usuario && usuario === reviewEmail) {
      setReviewToDelete({ id, reviewEmail });
      setShowModal(true);
    }else{
      alert("Usuario no autorizado para borrar esta reseña");
    }
  }
// Para borrar la reseña de la coleccion 'reseñas' de firestore
  const handleDelete = async () => {
        await deleteDoc(doc(db, 'reseñas', reviewToDelete.id));  
        setShowModal(false);
        setReviewToDelete(null);
    }
  
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
            <button type="submit" className='btn btn-primary mb-2'>Enviar</button>
          </form>
        </div>

        <div className='row'>
            {reviews.map((review) => (
              <div key={review.id} className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'> 
                  <p className='card-text'>{review.comentarios}</p>
                  <h6 className='card-title'>{review.usuarioEmail}</h6>
                  </div>
                
                <div className='card-footer'>
                  <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirmar eliminación de reseña</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      ¿Quiere borrar la reseña?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant='secondary' onClick={() => setShowModal(false)}>
                        VOLVER
                      </Button>
                      <Button variant='danger' onClick={() => handleDelete() }>
                        SI
                      </Button>
                    </Modal.Footer>
                  </Modal>
                     {review.usuarioEmail === usuario && (
                      <Button variant='danger' onClick={() => handleShowModal(review.id, review.usuarioEmail)}>
                        Eliminar
                      </Button>
                )}    
                </div>

                </div>
                
              </div>
            ))}
        </div>   
      <BackButton />
      <Footer />
      </div>
 
    </>
  );
}

export default Reviews;

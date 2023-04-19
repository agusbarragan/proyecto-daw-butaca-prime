import {  collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import firebaseApp, { auth } from '../firebase-config'
import { Button, Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import BackButton from '../components/BackButton';

export default function AnularReserva() {
    const db = getFirestore(firebaseApp);
    const [showModal, setShowModal] = useState(false);

    /*const anularReserva = () => {
    deleteDoc(doc(db, 'recibos', ));
        
    }*/

  /*getDocs(q).then((querySnapshot) => {    Este metodo serviria para que aparecieran en pantalla 
            const recibos = [];             las reservas de las personas logueadas pero no funciona
            querySnapshot.forEach((doc) => {
              recibos.push({ id: doc.id, data: doc.data() });
            });
            document.write(recibos);
            //Aquí puedes mostrar los recibos en pantalla utilizando los datos en el array recibos
          });*/

    function anularReserva() {  //Esta funcion borra todos los recibos(encriptados) del usuario que este logueado en ese momento

        const q = query(collection(db, 'recibos'),
                where('email', '==', `${auth.currentUser.email}`)
            );

        getDocs(q).then((querySnapshot) => {
            for (var i = 0; i < querySnapshot.docs.length; i++) {  
                deleteDoc(querySnapshot.docs[i].ref);
                console.log(querySnapshot.docs[i]);
            }
        })
    }

    return (
        
    <Container>
        <h1 className='text-light'>Reservas</h1>
        <Button onClick={anularReserva} className='me-2'>Anular reserva</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Información</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Reserva realizada, disfrute de la pelicula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                        </Button>
                    </Modal.Footer>
                    </Modal>    
                    
        <BackButton />

    </Container>

  )
}

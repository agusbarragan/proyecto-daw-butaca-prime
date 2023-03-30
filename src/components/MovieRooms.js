import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import salaCine from "../images/salaCine.png";
import salaCine2 from "../images/salaCine2.png";
import salaCine3 from "../images/salaCine3.png";
import BackButton from './BackButton';
import { getFirestore } from 'firebase/firestore';
import firebaseApp, { auth } from '../firebase-config';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function MovieRooms() {
  const { id, title } = useParams();  // Obtiene la id de la película desde los parámetros de la URL
  const [selectedRoom, setSelectedRoom] = useState('');

  function handleSelectRoom(room) {
    setSelectedRoom(room);
  }

   const saveReceipt = async () => {
    const db = getFirestore(firebaseApp);
    const userEmail = auth.currentUser.email;

    // Guardar el recibo en la base de datos de Firebase
    const receipt = addDoc(collection(db, "recibos"), {
      idPelicula: id,     
      salaReservada: selectedRoom,
      email: userEmail,
      nombrePelicula: title,
      fecha: new Date(),
    });

    console.log("Recibo enviado a la bbdd:", receipt.id);
  }

  return (
    <>    
    <Container className="my-5">
      <h2 className="text-center text-light mb-5">Salas disponibles</h2>
      <Row>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoom('Sala 1')}>
            Sala 1
            <Image className="p-2" src={salaCine} fluid roundedCircle />
          </Button>
        </Col>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoom('Sala 2')}>
            Sala 2
            <Image className="p-2" src={salaCine3} fluid roundedCircle />
          </Button>
        </Col>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoom('Sala 3')}>
            Sala 3
            <Image className="p-2" src={salaCine2} fluid roundedCircle />
          </Button>
        </Col>
      </Row>
      {selectedRoom && (
        <Row className="mt-5">
          <Col className="text-center">
            <Link to={`/reserva/${id}/${title}/${selectedRoom}`}>
            <Button variant="primary" size="lg" onClick={saveReceipt}>Reservar butacas para {selectedRoom}</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
    <BackButton />
    </>
  );
}

export default MovieRooms;
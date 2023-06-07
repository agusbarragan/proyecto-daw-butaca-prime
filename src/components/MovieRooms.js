import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import salaCine from "../images/salaCine.png";
import salaCine2 from "../images/salaCine2.png";
import salaCine3 from "../images/salaCine3.png";
import BackButton from './BackButton';
import NavigationBar from './Navbar';
import { Footer } from './Footer';

function MovieRooms() {
  // Obtiene la id de la película desde los parámetros de la URL
  const { id, title } = useParams();  

  // Creo dos estados selectedRoom y horaReservada, 
  // que almacenan la sala seleccioanda y la hora reservada respectivamente
  const [selectedRoom, setSelectedRoom] = useState(''); 
  const [horaReservada, setHoraReservada] = useState('');

  function handleSelectRoomAndHour(room, hora) {
    setSelectedRoom(room);
    setHoraReservada(hora);
  }
 

   /*const saveReceipt = async () => {  
    ESTO VALE PARA GUARDAR EN LA BASE DE DATOS LA SALA QUE HEMOS ELEGIDO 
    PERO YA TENGO EN EL ARCHIVO SEATS.js 
    LA MANERA DE GUARDAR EN LA BASE DE DATOS EL RECIBO COMPLETO
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
  }*/

  return (
    <>
    {/* Creo las tres salas disponibles  */}
    <NavigationBar />
    <Container className="my-5">
      <h2 className="text-center text-light mb-5">Salas disponibles</h2>
      <Row>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoomAndHour('Sala 1', '16:00H')}>
            Sala 1
            <Image className="p-2" src={salaCine} fluid roundedCircle />
            Hora: 16:00H
          </Button>
        </Col>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoomAndHour('Sala 2', '20:00H' )}>
            Sala 2
            <Image className="p-2" src={salaCine3} fluid roundedCircle />
            Hora: 20:00H 
          </Button>
        </Col>
        <Col sm={4}>
          <Button variant="outline-primary" size="lg" onClick={() => handleSelectRoomAndHour('Sala 3', '22:00H')}>
            Sala 3
            <Image className="p-2" src={salaCine2} fluid roundedCircle />
            Hora: 22:00H
          </Button>
        </Col>
      </Row>
      {selectedRoom && (
        <Row className="mt-5">
          <Col className="text-center">
            <Link to={`/reserva/${id}/${title}/${selectedRoom}/${horaReservada}`}>
            <Button variant="primary" size="lg" onClick={handleSelectRoomAndHour}>Reservar butacas para {selectedRoom}</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
    <BackButton />
    <Footer />
    </>
  );
}

export default MovieRooms;
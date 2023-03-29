import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import salaCine from "../images/salaCine.png";
import salaCine2 from "../images/salaCine2.png";
import salaCine3 from "../images/salaCine3.png";
import BackButton from './BackButton';

function MovieRooms() {
  const { id } = useParams();  // Obtiene la id de la película desde los parámetros de la URL
  const [selectedRoom, setSelectedRoom] = useState('');

  function handleSelectRoom(room) {
    setSelectedRoom(room);
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
            <Link to={`/reserva/${id}/${selectedRoom}`}>
              <Button variant="primary" size="lg">Seleccionar butacas para {selectedRoom}</Button>
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
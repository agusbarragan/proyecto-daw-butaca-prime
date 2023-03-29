import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { MdOutlineEventSeat } from 'react-icons/md';
import BackButton from './BackButton';
import firebaseApp from '../firebase-config';
import 'firebase/database';


const CinemaRoom = () => {
    const [seats, setSeats] = useState(new Array(60).fill(false)); // matriz de butacas
    const [selectedSeats, setSelectedSeats] = useState(0);

    const toggleSeat = (index) => { // función para cambiar el estado de la butaca al hacer clic
        const newSeats = [...seats];
        newSeats[index] = !newSeats[index];
        setSeats(newSeats);

        setSelectedSeats(selectedSeats + (newSeats[index] ? 1 : -1));
    };

    const saveReceipt = (selectedSeats) => {
        // Obtener una referencia a la base de datos de Firebase
        const db = firebaseApp.database();
        // Crear un objeto con los datos del recibo
        const receipt = {
            selectedSeats: selectedSeats,
            // Agregar aquí cualquier otro dato que quieras guardar en el recibo
        };
        // Guardar el recibo en la base de datos de Firebase
        db.ref('receipts').push(receipt);
    }
    
    return (
        <Container>
            <h1 class='text-light'>Butacas disponibles</h1>
            <Row>
                {seats.map((seat, index) => (
                    <Col key={index} xs={2} className="mb-3">
                        <Button className='m-2'
                            variant={seat ? "success" : "danger"}
                            onClick={() => toggleSeat(index)}
                        //disabled={index === 10 || index === 20 || index === 30 || index === 40 || index === 50}
                        >
                            <MdOutlineEventSeat className='m-1' />
                            {index + 1}
                        </Button>
                    </Col>
                ))}
            </Row>
                <p class='text-light d-flex flex-row'>Butacas seleccionadas: {selectedSeats}</p>
                <Button onClick={ saveReceipt } className='m-2'>Enviar Recibo</Button>
            <BackButton />
        </Container>
    );
};

export default CinemaRoom;

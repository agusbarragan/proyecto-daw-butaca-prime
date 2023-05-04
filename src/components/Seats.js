import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { MdOutlineEventSeat } from 'react-icons/md';
import BackButton from './BackButton';
import firebaseApp from '../firebase-config';
import { getAuth } from 'firebase/auth';
import { onSnapshot, collection, addDoc, doc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import Contacto from './Contacto';
import { QRCodeComponent } from './QRCodeComponent';
import QRCode from 'react-qr-code';


export default function CinemaRoom() {
    const [seats, setSeats] = useState(new Array(60).fill(false)); // matriz de butacas
    const [selectedSeats, setSelectedSeats] = useState(0);
    const { title } = useParams();
    const [selectedPrice, setSelectedPrice] = useState(0);
    const selectedRoom = useParams();  //Accedo a la url que esta en MovieRooms.js y luego esta variable la paso a la constante salaReserva y la leo en el document.write salaReserva.selectedRoom
    const horaReservada = useParams();
    const [showModal, setShowModal] = useState(false);
    

    const db = getFirestore(firebaseApp);

    const toggleSeat = (index) => { // función para cambiar el estado de la butaca al hacer clic
        const newSeats = [...seats];
        newSeats[index] = !newSeats[index];
        setSeats(newSeats);

        setSelectedSeats(selectedSeats + (newSeats[index] ? 1 : -1));
        setSelectedPrice(selectedPrice + (newSeats[index] ? 5 : -5));

        const seatElement = document.getElementById(`seat-${index}`);
        if (seatElement) {
          if (newSeats[index]) {
            seatElement.classList.add('seat-selected');
            seatElement.disabled = true;
          } else {
            seatElement.classList.remove('seat-selected');
            seatElement.disabled = false;
          }
        }
    };



    

    //Guardar los recibos en la cloud firestore lo puede configurar gracias a este video
    // https://www.youtube.com/watch?v=8idyed4aJEA&t=58s

    const saveReceipt = () => {
        const auth = getAuth(firebaseApp);
        const butacasReservadas = seats                                         //Despues de arreglar la linea 16 por fin he podido filtrar las butacas seleccionadas y mostrarlas en el recibo
            .map((seat, index) => (seat ? index + 1 : null))
            .filter((seat) => seat !== null)
            .join(", ");
            
            const salaReserva = selectedRoom;                           //Arreglado linea 16
        const userEmail = auth.currentUser.email;
        const reciboRef = collection(db, "recibos");
        const ultimoReciboRef = doc(reciboRef, "ultimo");

        const unsubscribe = onSnapshot(ultimoReciboRef, (docSnapshot) => {
            const ultimoRecibo = docSnapshot.data();
            const ultimoNumeroRecibo = ultimoRecibo ? ultimoRecibo.numeroRecibo : 0;

            const nuevoNumeroRecibo = ultimoNumeroRecibo + 1;
            const fechaReserva = new Date();

            // Guardar el recibo en la base de datos de Firebase
            addDoc(collection(db, "recibos"), {
                numeroRecibo: nuevoNumeroRecibo,
                email: userEmail,
                salaReservada: salaReserva,
                butacas: butacasReservadas,
                nombrePelicula: title,
                precioReserva: `${selectedPrice} €`,
                fecha: new Date(),
            });            


            const generarPDF = () => {
                
                const doc = new jsPDF({
                    format: "a4",
                  });

                doc.setFont('Lato-Regular', 'normal');
                doc.setFontSize(22);
                doc.text('Butaca Reserve', 105, 8, 'center');
                doc.text(' ', 10, 10);
                doc.setFontSize(16);
                doc.text(`Número de recibo: ${nuevoNumeroRecibo}`, 10, 20);
                doc.text(`Email: ${userEmail}`, 10, 30);
                doc.text(`Sala reservada: ${salaReserva.selectedRoom}`, 10, 40);                
                doc.text(`Hora de reserva: ${salaReserva.hora}`, 10, 50);
                doc.text(`Nº butaca reservada: ${butacasReservadas}`, 10, 60);
                doc.text(`Película: ${title}`, 10, 70);
                doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 80);
                doc.text(`Precio: ${selectedPrice} €`, 10, 90);
                
                doc.save('ReciboReserva.pdf');
             
            }

            generarPDF();

            unsubscribe();
            
        })
    }



    const handleShow = () => {
        setShowModal(true);
        saveReceipt();
    }

   
    
    return (
        <Container>
            <h1 class='text-light'>Butacas disponibles</h1>
            <Row>
                {seats.map((seat, index) => (
                    <Col key={index} xs={2} className="mb-2">
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
            <p class='text-light d-flex align-content-end'>Precio: {selectedPrice}€</p>
            
            {selectedSeats === 0 ? <p>Seleccione las butacas que desea reservar</p> : <Button onClick={handleShow} className='m-2' id='botonRecibo'>Conseguir Ticket</Button>}
            
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Información</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Reserva realizada, disfrute de la película.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                        </Button>
                    </Modal.Footer>
                    </Modal>
        
            <BackButton />

        </Container>
    );
};

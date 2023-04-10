import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { MdOutlineEventSeat } from 'react-icons/md';
import BackButton from './BackButton';
import firebaseApp from '../firebase-config';
//import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { onSnapshot, collection, addDoc, doc, updateDoc, deleteField, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function CinemaRoom() {
    const [seats, setSeats] = useState(new Array(60).fill(false)); // matriz de butacas
    const [selectedSeats, setSelectedSeats] = useState(0);
    const { title } = useParams();
    const [selectedPrice, setSelectedPrice] = useState(0);

    const db = getFirestore(firebaseApp);

    const toggleSeat = (index) => { // función para cambiar el estado de la butaca al hacer clic
        const newSeats = [...seats];
        newSeats[index] = !newSeats[index];
        setSeats(newSeats);

        setSelectedSeats(selectedSeats + (newSeats[index] ? 1 : -1));
        setSelectedPrice(selectedPrice + (newSeats[index] ? 5 : -5));
        

    };

   

    //Guardar los recibos en la cloud firestore lo puede configurar gracias a este video
    // https://www.youtube.com/watch?v=8idyed4aJEA&t=58s

    const saveReceipt = () => {
        const auth = getAuth(firebaseApp);
        const butacasReservadas = "";
        const salaReserva = "";                           //Tengo que arreglar como se coloca la sala elegida por el cliente al recibir el recibo en la base de datos
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

            alert("Recibo enviado a la bbdd");

                /*Construir la URL con los datos del cliente y la información de la reserva
                const baseUrl = window.location.origin;
                const queryParams = `?email=${userEmail}&movie=${"movieName"}&seats=${selectedSeats}&sala=${salaReserva}&fecha=${fechaReserva}`;
                const url = `${baseUrl}/receipt${queryParams}`;
              
                // Abrir la nueva ventana con la URL construida
                window.open(url, '_blank');*/

                const reciboContent = `
                <html>
                  <head>
                    <title>Recibo ${nuevoNumeroRecibo}</title>
                  </head>
                  <body>
                    <h1>Recibo ${nuevoNumeroRecibo}</h1>
                    <p>Fecha de reserva: ${fechaReserva.toLocaleDateString()} a las ${fechaReserva.toLocaleTimeString()}</p>

                    <p>Nombre de la pelicula: ${title}</p>
                    <p>Sala reservada: ${salaReserva}</p>
                    <p>Butacas reservadas: ${butacasReservadas}</p>
                    <p>Email del cliente: ${userEmail}</p>
                    <p>Precio de reserva: ${selectedPrice} €</p>
                  </body>
                </html>
              `;
          
              // Abrir una nueva pestaña con el contenido del recibo
              const newWindow = window.open("");
              newWindow.document.write(reciboContent);

        
            
            //Arreglar la suma de 1 en 1 cada vez que se envia un recibo a la base de datos, que el numeroRecibo sea 1, 2, 3, 4, etc...
            //Añadir tambien una ventana emergente que muestre el recibo por ejemplo en pdf, con el precio, email, sala y butacas reservadas
            //Hacer tambien el precio por butaca y mostrarlo al cliente

            
            //set(ultimoReciboRef, { numeroRecibo: nuevoNumeroRecibo }, { merge: true });
            
            // Remueve el listener

            unsubscribe();

        })
    }
    
    /*NO FUNCIONA HAY QUE ARREGLARLO
    const cancelReserve = () => {

        const reservaRef = doc(db, 'recibos');
        updateDoc(reservaRef, {
            numeroRecibo: deleteField(),
            email: deleteField(),
            salaReservada: deleteField()
        })
    }*/

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
            <p class='text-light d-flex align-content-end'>Precio: {selectedPrice}€</p>
            <Button onClick={saveReceipt} className='m-2'>Conseguir Ticket</Button>
            
            
            {/*<Button onClick={"receipt"}>Informe Recibo</Button>*/}

           {/* <Button onClick={ cancelReserve } className='m-2'>Cancelar reserva</Button> 
           Tengo ya el boton de abajo BackButton para volver atras, por lo que no creo que haga falta este boton de cancelReserve
           */} 

            <BackButton />
        </Container>
    );
};


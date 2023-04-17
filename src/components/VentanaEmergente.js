import React from 'react'

export const VentanaEmergente = (props) => {
    const {nuevoNumeroRecibo, fechaReserva, title, salaReserva, horaReservada, butacasReservadas, userEmail, selectedPrice} = props;
  return (
    <div>
        <h1>Recibo ${nuevoNumeroRecibo}</h1>
            <p>Fecha de reserva: ${fechaReserva.toLocaleDateString()} a las ${fechaReserva.toLocaleTimeString()}</p>
            <p>Nombre de la pelicula: ${title}</p>
            <p>Sala reservada: ${salaReserva.selectedRoom}</p>
            <p>Hora de reserva: ${horaReservada.hora}</p>
            <p>Butacas reservadas: ${butacasReservadas}</p>
            <p>Email del cliente: ${userEmail}</p>
            <p>Precio de reserva: ${selectedPrice} €</p>
    </div>
  )
}

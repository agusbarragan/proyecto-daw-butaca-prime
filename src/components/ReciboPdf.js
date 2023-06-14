import React from 'react'
import jsPDF from 'jspdf';

export const ReciboPdf = (nuevoNumeroRecibo, userEmail, salaReserva, hora, butacasReservadas, title, selectedPrice) => {
    // Creo la constante doc a traves de la libreria jsPDF
        const doc = new jsPDF({
            format: "a4",
            orientation: 'landscape',
            unit: 'mm',
          });
    // Recojo el id del codigoQR
        const base64Image = document.getElementById('qrcode').toDataURL();

    // Le doy propiedades al documento y lo voy creando 
        doc.setFont('Lato-Regular', 'normal');
        doc.setFontSize(22);
        doc.text('Butaca Prime', 150, 15, 'center');
        doc.text(' ', 10, 25);
        doc.setFontSize(16);
        doc.text(`Número de recibo: ${nuevoNumeroRecibo}`, 10, 55);
        doc.text(`Email: ${userEmail}`, 10, 65);
        doc.text(`Sala reservada: ${salaReserva.selectedRoom}`, 10, 75);                
        doc.text(`Hora de reserva: ${hora}`, 10, 85);
        doc.text(`Nº butaca reservada: ${butacasReservadas}`, 10, 95);
        doc.text(`Película: ${title}`, 10, 105);
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 115);
        doc.text(`Precio: ${selectedPrice} €`, 10, 125);
        doc.addImage(base64Image, 'png', 190, 65);
        doc.text('Valide su entrada en taquilla.', 175, 107);
        doc.text('Gracias.', 197, 115);
        doc.setFontSize(9);
        doc.text('© Todos los derechos reservados', 10, 190);
        doc.text('Butaca Prime', 260, 190);
        doc.save('ReciboReserva.pdf');
        
  return (
    <>
       {/* <QRcode hidden value = {'https://butacaprime.com'} id = 'qrcode'/>
       
       SI LO QUITO FUNCIONA YA QUE LA const base64Image recoge le id del <QRcode /> que esta

       en Seats.js linea 116 y de ahi lo pasa a addImage y lo añade al PDF
       */ } 
    </>
  )
    }





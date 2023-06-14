import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackButton from "./BackButton";
import NavigationBar from "./Navbar";
import { Footer } from "./Footer";

const Contacto = () => {
  return (
    <>
    {/* Importo el menu de navegacion y creo los parrafos para el componente Contacto */}
      <NavigationBar />
      <Container  className="container text-start col-6">
        <Row>
          <Col>
            <h1 class="text-light text-center mb-3">Sobre Nosotros</h1>
            <p class="text-light">
              Bienvenidos a nuestra página web de reserva de butacas de cine.
              Nos dedicamos a ofrecer una experiencia única y cómoda a nuestros
              clientes, permitiéndoles reservar sus butacas desde la comodidad
              de su hogar.
            </p>
            <p class="text-light">
              Somos una plataforma en línea que busca facilitar la experiencia
              de compra de entradas para el cine. Con la ayuda de nuestra
              plataforma, los usuarios pueden reservas sus butacas para su
              película favorita sin tener que hacer largas colas o preocuparse
              por el agotamiento de las entradas.
            </p>
            <p class="text-light">
              Nuestro objetivo es ofrecer una experiencia de usuario sencilla y
              sin complicaciones para nuestros clientes, desde la selección de
              películas hasta la compra de entradas.
              En nuestra página web, puedes encontrar un listado de películas en
              cartelera de este mismo año. También puedes elegir la sala y hora
              de la función, y reservar las butacas que desees.
            </p>
            <p class="text-light">
              Nuestro compromiso con la satisfacción del cliente es nuestra
              principal prioridad. Trabajamos duro para asegurarnos de que cada
              usuario tenga una experiencia positiva al utilizar nuestra
              plataforma y de que estén satisfechos con su reserva.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <h2 class="text-light text-center mb-3">Contacto</h2>
            <p class="text-light">
              Si tienes alguna pregunta o comentario, no dudes en ponerte en
              contacto con nosotros. Puedes encontrarnos en las siguientes redes
              sociales:
            </p>
           
          </Col>
        </Row>
      </Container>

      <Footer />      
      <BackButton />
    </>
  );
};

export default Contacto;

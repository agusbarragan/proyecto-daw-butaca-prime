import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import BackButton from './BackButton';
import NavigationBar from './Navbar';

const Contacto = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h2 class="text-light">Sobre Nosotros</h2>
                        <p>
                            Bienvenidos a nuestra página web de reserva de butacas de cine.
                            Nos dedicamos a ofrecer una experiencia única y cómoda a nuestros clientes,
                            permitiéndoles reservar sus butacas desde la comodidad de su hogar.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 class='text-light'>Contacto</h2>
                        <p>
                            Si tienes alguna pregunta o comentario,
                            no dudes en ponerte en contacto con nosotros.
                            Puedes encontrarnos en las siguientes redes sociales:
                        </p>
                        <ul className='list-group list-group-horizontal list-unstyled justify-content-center'>
                            <li>
                                <button className='btn btn-light m-2'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'><FaInstagram /> Instagram</a></button>
                            </li>
                            <li>
                                <button className='btn btn-light m-2'><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'><FaTwitter /> Twitter</a></button>
                            </li>
                            <li>
                                <button className='btn btn-light m-2'><a href="mailto:info@tupagina.com" className='text-decoration-none'><FaEnvelope /> reservebutaca@gmail.com</a></button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        
            <BackButton />
        </>
    );
};

export default Contacto;
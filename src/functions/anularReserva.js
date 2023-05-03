import React, { useState, useEffect } from "react";
import { getFirestore, onSnapshot, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../firebase-config";
import firebaseApp from "../firebase-config";
import BackButton from "../components/BackButton";
import NavigationBar from "../components/Navbar";
import { Modal, Button } from "react-bootstrap";

const AnularReservas = () => {
    const [recibos, setRecibos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);


    const db = getFirestore(firebaseApp);
    
    useEffect(() => {
        const usuario = auth.currentUser.email;
        const q = query(collection(db, "recibos"), where("email", "==", usuario));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setRecibos(data);
          setLoading(false);
        });
        return unsubscribe;
      }, [db]);
      
      
    
      const anularReserva = async (id) => {
        try {
            await deleteDoc(doc(db, 'recibos', id));
            setShowModal(false);
            console.log("Reserva anulada con éxito");
          
        } catch (error) {
          console.error("Error al anular la reserva", error);
        }
      };
      
          

    if (loading) {
      return <div>Cargando...</div>;
    }
    
    return (
        <>
        <NavigationBar />
      <div>
        <h2 className="text-light">Mis reservas</h2>
        <div className="row">
          {recibos.map((recibo) => (
            <div key={recibo.id} className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Película: {recibo.nombrePelicula}</h5>
                    <p className="card-text">Email: {recibo.email}</p>
                    <p className="card-text">Butacas: {recibo.butacas}</p>
                    <p className="card-text">Hora reserva: {recibo.salaReservada.hora}</p>
                    <p className="card-text">Día: {recibo.fecha.toDate().toLocaleDateString()} a las {recibo.fecha.toDate().toLocaleTimeString()}</p>
                    <h5 className="card-title">Total pagado: {recibo.precioReserva}</h5>
                </div>
            <div className="card-footer">
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmar cancelación de reserva</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    ¿Está seguro de que desea cancelar esta reserva?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      VOLVER
                    </Button>
                    <Button variant="danger" onClick={() => anularReserva(recibo.id)}>
                      SI
                    </Button>
                  </Modal.Footer>
                </Modal>
                    <Button variant="danger" onClick={() => setShowModal(true)}>
                      Cancelar reserva
                    </Button>
                
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>

      

        <BackButton />
      </>
    );
  };
  
  export default AnularReservas;
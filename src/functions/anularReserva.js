import React, { useState, useEffect } from "react";
import { getFirestore, onSnapshot, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../firebase-config";
import firebaseApp from "../firebase-config";
import BackButton from "../components/BackButton";
import NavigationBar from "../components/Navbar";

const AnularReservas = () => {
    const [recibos, setRecibos] = useState([]);
    const [showAlert, setShowAlert] = useState(false);


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
        });
        return unsubscribe;
      }, [db]);
      
      
    
    const anularReserva = async (id) => {      
        try {
            console.log(doc);
            setShowAlert(true); // Mostrar alerta
            setTimeout(async () => {
            await deleteDoc(doc(db, 'recibos', id));
          
          console.log("Reserva anulada con éxito");
            }, 2000);
 
        } catch (error) {
          console.error("Error al anular la reserva", error);
        }
      };
          

    
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

                <button onClick={() => {
                  setShowAlert(true);
                  anularReserva(recibo.id);
              }} className="btn btn-danger">Cancelar reserva</button>
              {showAlert && (
        <div className="alert alert-danger mt-2" role="alert">
            ¿Está seguro de que desea cancelar esta reserva?
            <button type="button" className="btn btn-secondary ml-2" onClick={() => setShowAlert(false)}>Cancelar</button>
            <button type="button" className="btn btn-danger ml-2" onClick={() => anularReserva(recibo.id)}>Confirmar</button>
        </div>
              )}

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
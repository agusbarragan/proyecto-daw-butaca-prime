import React, { useState, useEffect } from "react";
import { getFirestore, onSnapshot, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../firebase-config";
import firebaseApp from "../firebase-config";
import BackButton from "../components/BackButton";
import NavigationBar from "../components/Navbar";


const AnularReservas = () => {
    const [recibos, setRecibos] = useState([]);
    const [loading, setLoading] = useState(true);

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
            console.log(doc);
          await deleteDoc(doc(db, 'recibos', id));
          
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
                    <h5 className="card-title">{recibo.email}</h5>
                    <p className="card-text">Película: {recibo.nombrePelicula}</p>
                    <p className="card-text">Butacas: {recibo.butacas}</p>
                    <p className="card-text">Hora reserva: {recibo.salaReservada.hora}</p>
                    <p className="card-text">Día: {recibo.fecha.toDate().toLocaleDateString()} a las {recibo.fecha.toDate().toLocaleTimeString()}</p>
                    <p className="card-text">Total pagado: {recibo.precioReserva}</p>
                </div>
            <div className="card-footer">
              <button onClick={() => anularReserva(recibo.id)} className="btn btn-danger">Anular reserva</button>
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
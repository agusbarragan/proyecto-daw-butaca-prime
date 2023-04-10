/*import 'firebase/firestore';
import { addDoc, getFirestore } from 'firebase/firestore';
import firebaseApp from '../firebase-config';
import { collection } from 'firebase/firestore';
export default function addSeats() {



  const db = getFirestore(firebaseApp);

      // Obtiene una referencia a la colección de butacas
  
  // Genera un lote de 60 butacas
  const butacas = [];
  for (let i = 1; i <= 60; i++) {
    butacas.push({ numero: i, disponibilidad: true });
  }
  
  // Añade el lote de butacas a Firestore
  addDoc(collection(db, "butacas"), {

    numeroButaca: butacas,


  })



}


SE PUEDE BORRAR ESTE ARCHIVO

*/
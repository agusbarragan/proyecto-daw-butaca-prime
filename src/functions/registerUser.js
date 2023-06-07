import firebaseApp, { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function registerUser(email, password) {
    // Un try en el que le paso a la funcion createUserWithEmailAndPassword el email y el password
    // Luego añado ese usuario a la base de datos a la coleccion 'usuarios' y muestro una alerta en pantalla
    // Un catch para controlar el error
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await addDoc(collection(db, "usuarios"), {
            email: document.getElementById("email").value,
            authProvider: "local",
        })
        alert("Email registrado");
        console.log(res);
        
    } catch (error) {
        alert(error);
    }
}
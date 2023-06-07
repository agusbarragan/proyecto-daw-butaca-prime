import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(email, password) {
    // Un try en el que creo la const user, y le paso el email y password para que se pueda hacer login
    // Y un catch para controlar el error
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        alert("Ese email no existe");
        //si el email no existe error
        //si la contraseña esta mal error tambien
    }
}
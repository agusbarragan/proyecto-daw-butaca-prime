import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

export default async function logOut() {
    // Try en el que le paso a la funcion signOut el auth, y me lleva a la pagina principal '/'
    // Y el catch para controlar el error
    try {
        await signOut(auth);
        window.location.href="/";
    } catch (error) {
        console.log(error);
    }
}
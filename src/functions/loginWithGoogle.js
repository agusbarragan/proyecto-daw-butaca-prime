import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default async function loginWithGoogle() {
    // Un try en el que creo el proveedor de google para poder autenticarse
    // Y un catch para controlar el error
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    } catch (error) {
        console.log(error);
    }
}


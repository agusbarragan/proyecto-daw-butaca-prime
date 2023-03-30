import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(email, password) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        alert("Ese email no existe");
    }
}
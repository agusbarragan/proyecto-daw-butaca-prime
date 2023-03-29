import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    } catch (error) {
        console.log(error);
    }
}


import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

export default async function logOut() {
    try {
        await signOut(auth);
        window.location.href="/";
    } catch (error) {
        console.log(error);
    }
}
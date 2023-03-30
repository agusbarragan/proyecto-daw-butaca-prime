import firebaseApp, { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function registerUser(email, password) {
    try {
        await addDoc(collection(db, "usuarios"),{
            email: document.getElementById("email").value,
            authProvider: "local",
        })

        const res = await createUserWithEmailAndPassword(auth, email, password);

        alert("Email registrado");


        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
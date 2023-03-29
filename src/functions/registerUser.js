import firebaseApp, { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ref, set } from "firebase/database";

const db = getFirestore(firebaseApp);

export default async function registerUser(email, password) {
    try {
        //await addDoc(collection(db, "usuarios"),{   //PROBAR EN CASA PORQUE NO ME DEJA DESDE AQUI EN S0L
            //uid: user.uid,
          //  email: document.getElementById("email").value,
            //authProvider: "local",
        //})        
        
        set(ref(db, 'users/' + email),{   //PROBAR ESTA PRIMERO SINO LA DE LA LINEA 10 A LA 14 xd y quitar la 16,17,18
            email: email,
        })

        const res = await createUserWithEmailAndPassword(auth, email, password);

        alert("registro goz");


        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function resetPassword(email) {

    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert("Se ha enviado un correo para resetear password");
    }).catch((error) => {
        alert(error.message);
    });
}

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();
const email = 
sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Email enviado para reseteo")
  })
  .catch((error) => {
    alert(error.message);

});
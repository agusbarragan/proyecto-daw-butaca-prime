import React, { useState } from 'react';
import 'firebase/auth';
import { auth } from '../firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {
  const [email, setEmail] = useState('');

  function handleResetPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Se ha enviado un correo electrónico de restablecimiento de contraseña.');
      })
      .catch((error) => {
        alert(`Error al enviar el correo electrónico de restablecimiento de contraseña: ${error.message}`);
      });
  }

  return (
    <div>
      <h2 className='text-light'>Restablecer contraseña</h2>
      <p className='text-light'>Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña.</p>
      <input className='input-group' type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
      <button onClick={handleResetPassword} className='btn btn-dark m-2'>Enviar correo electrónico</button>
    </div>
  );
}

export default ResetPassword;

import React, { useState } from 'react'
//import { auth } from '../firebase-config'
//import { Auth } from 'firebase/auth';
import loginWithEmailPassword from '../functions/loginWithEmailPassword';
import registerUser from '../functions/registerUser';
import loginWithGoogle from '../functions/loginWithGoogle';
import { FcGoogle } from 'react-icons/fc';
import resetPassword from '../functions/resetPassword';


const Logueo = () => {
    const [isRegistrando, setIsRegistrando] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.contrasena.value;

        if (isRegistrando) {
            await registerUser(email, password);

        } else {
            await loginWithEmailPassword(email, password);

        }
    }

    return (
        <>
            <div class="container mt-5">
                <h1 class="text-center display-4 text-light">Butaca Reserve</h1>
            </div>
            <div className='divLogueo'>
                <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"} </h1>
                <form onSubmit={submitHandler} className="formularioLogueo">

                    <label htmlFor="emailField">Correo</label>
                    <input type="email" id="email" />

                    <label htmlFor="passwordField">Contraseña</label>
                    <input type="password" id="contrasena" />
                    <div class="d-flex justify-content-between">
                        <div class="btn-group" role="group">
                            <button type="submit" class="btn btn-dark m-2 rounded">
                                {" "}
                                {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
                            </button>

                            <button onClick={loginWithGoogle} type="button" className="botonGoogle" class="btn btn-dark m-2 rounded">
                                Accede con Google <i>{<FcGoogle size="1em" />}</i>
                            </button>
                        </div>
                    </div>
                </form>

                <div class="d-flex justify-content-center">
                    <button onClick={() => setIsRegistrando(!isRegistrando)} class="btn btn-dark btn-sm">
                        {isRegistrando ? "¿Ya tiene cuenta? Inicia sesión"
                            : "¿No tienes cuenta? Regístrate"}
                    </button>

                    <button onClick={ resetPassword }></button>
                </div>
            </div>
        </>
    )
}

export default Logueo;
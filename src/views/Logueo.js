import React, { useState } from 'react'
import loginWithEmailPassword from '../functions/loginWithEmailPassword';
import registerUser from '../functions/registerUser';
import loginWithGoogle from '../functions/loginWithGoogle';
import { FcGoogle } from 'react-icons/fc';
import ResetPassword from '../functions/resetPassword';


const Logueo = () => {
    const [isRegistrando, setIsRegistrando] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false)
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
                <h1 class="text-center display-3 text-light">Butaca Prime</h1>
            </div>
            <div className='divLogueo'>
                {showResetPassword ? (
                    <>
                        <ResetPassword />
                        <button className='btn btn-dark' onClick={() => setShowResetPassword(false)}>Cancelar</button>
                    </>
                ) : (
                    <>
                        <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"} </h1>
                        <form onSubmit={submitHandler} className="formularioLogueo">

                            <label htmlFor="emailField">Correo</label>
                            <input type="email" id="email" placeholder='Email' />

                            <label htmlFor="passwordField">Contraseña</label>
                            <input type="password" id="contrasena" placeholder='Contraseña' />
                            <div class="d-flex justify-content-between flex-column">
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
                            <button class='btn btn-dark btn-sm m-2' onClick={setShowResetPassword}>Resetear contraseña</button>
                        </div>
                    </>
                )}

            </div>
</>
            )
}

            export default Logueo;
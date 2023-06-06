import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
<>
    {/* Creo un footer para la pagina */}

    <footer class="text-center footer_pagina position-relative bottom-0">
      <div class="container mt-4">
          <a
            class="btn btn-floating m-1 fa-twitter"
            href="https://www.twitter.com/ButacaPrime"
            role="button"
            ><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }} /></a>

          <a
            class="btn btn-floating m-1 fa-instagram"
            href="https://www.instagram.com/ButacaPrime"
            role="button"
            ><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }} /></a>
    

          <a
            class="btn btn-floating m-1 fa-facebook"
            href="https://www.facebook.com/ButacaPrime"
            role="button"
            ><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px'}} /></a>

      </div>
      <div class="text-center text-white p-3" >
        © 2023 Copyright:
        <a class="text-white" href="https://butacaprime.com/" style={{textDecorationLine: 'none'}}> ButacaPrime.com</a>
      </div>
  </footer>   
</>
    )
}

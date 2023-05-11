import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
    <footer class="text-center">

    <div class="container mt-4">


        <a
          class="btn btn-floating m-1"
          href="https://www.twitter.com"
          role="button"
          ><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }} /></a>

        <a
          class="btn btn-floating m-1"
          
          href="https://www.instagram.com"
          role="button"
          ><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }} /></a>
  

        <a
          class="btn btn-floating m-1"
          href="https://www.facebook.com"
          role="button"
          ><FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '30px'}} /></a>

    </div>

  

    <div class="text-center text-white p-3" >
      © 2023 Copyright:
      <a class="text-white" href="https://butacareserve.com/" style={{textDecorationLine: 'none'}}> ButacaReserve.com</a>
    </div>

  </footer>    
    )
}

import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
        <div class="footer-section  layout" >
            <div class="footer-items re-footer">
                <img src="images/logoF.svg" alt="footer logo"/>
        
                <p>Throw paperwork into the trash.</p>
            </div>
            <div class="footer-items footer-ul">
                <div class="foota">
                    <ul class="footer-links">
                        <li class="Fsocials"><a href="#"><img src='images/facebook.svg' /></a></li>
                        <li class="Fsocials"><a href="#"><img src='images/twitter.svg' /></a></li>
                        <li class="Fsocials"><a href="#"><img src='images/linkedin.svg' /></a></li>
                        <li class="Fsocials"><a href="#"><img src='images/vector3.svg' /></a></li>
                    </ul>
                    <div class="copy"> Copyright &copy;  Genesys DevStudio. All rights reserved</div>
                </div>
            </div>
        </div>  
    </footer>
  )
}

export default Footer
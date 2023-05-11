import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">henry bazalar</h2>

                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Acerca de</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li>
                        <a href="#skills" className="footer__link">Competencias</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li>
                        <a href="#services" className="footer__link">Servicios</a>
                    </li>
                </ul> */}

                <div className="footer__social">
                        <a
                            href="https://www.linkedin.com/in/hbazalar/"
                            className="footer__social-link"
                            target="_blank">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/h-bazalar"
                            className="footer__social-link"
                            target="_blank">
                            <i class="uil uil-github"></i>
                        </a>
                        <a 
                            href="https://www.instagram.com/" 
                            className="footer__social-link" 
                            target="_blank">
                            <i class="uil uil-instagram-alt"></i>
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            className="footer__social-link"
                            target="_blank">
                            <i class="uil uil-twitter"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            className="footer__social-link"
                            target="_blank">
                            <i class="uil uil-facebook"></i>
                        </a>
                </div>
                        
                <span className="footer__copy">Copyright &#169; 2023 Todos los derechos reservados.</span>
                    
            </div>
        </footer>
    )
}

export default Footer
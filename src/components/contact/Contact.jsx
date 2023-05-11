import React from "react";
import "./contact.css";

const Contact = () => {
return (
    <section className="contact section" id="contact">
    <h2 className="section__title">Contacto</h2>
    <span className="section__subtitle"></span>

    <div className="contact__container container grid">
        <div className="contact__content">
        <h3 className="contact__title">Hable conmigo</h3>
        <div className="contact__info">
            <div className="contact__card">
            <i class="uil uil-envelope-check"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">hbazalar@gmail.com</span>
            <a href="mailto:hbazalar@gmail.com" className="contact__button">
                Escríbeme
                <i class="uil uil-arrow-right"></i>
            </a>
            </div>
            <div className="contact__card">
            <i class="uil uil-whatsapp-alt"></i>
            <h3 className="contact__card-title">Whatsapp</h3>
            <span className="contact__card-data">965-797-953</span>
            <a
                href="https://api.whatsapp.com/send?phone=51965797953&text=Hola, me puedes enviar mayor información?"
                className="contact__button"
            >
                Escríbeme
                <i class="uil uil-arrow-right"></i>
            </a>
            </div>
            <div className="contact__card">
            <i class="uil uil-facebook-messenger"></i>
            <h3 className="contact__card-title">Messenger</h3>
            <span className="contact__card-data">h_bazalar@hotmail.com</span>
            <a href="https://m.me/crypticalcoder" className="contact__button">
                Escríbeme
                <i class="uil uil-arrow-right"></i>
            </a>
            </div>
        </div>
        </div>

        <div className="contact__content">
        <h3 className="contact__title">Cuénteme sobre su proyecto</h3>
        <form className="contact__form">
            <div className="contact__form-div">
            <label className="contact__form-tag">Nombre</label>
            <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Escriba su nombre"
            />
            </div>
            <div className="contact__form-div">
            <label className="contact__form-tag">Correo</label>
            <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Escriba su correo"
            />
            </div>
            <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Proyecto</label>
            <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Escriba su proyecto"
            ></textarea>
            </div>
            <a href="#contact" className="button button--flex_2">
            Enviar
            <i class="uil uil-message"></i>
            </a>
        </form>
        </div>
    </div>
    </section>
);
};

export default Contact

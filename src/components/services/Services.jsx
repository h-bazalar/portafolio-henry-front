import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle"></span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">WEB <br />DEVELOPER</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        +Info
                    <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Web Developer</h3>
                            <p className="services__modal-description">Servicios con más de 1 año de experiencia. Proporcionando un trabajo de calidad a clientes y empresas</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Desarrollo de páginas web.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Creación de interacciones de elementos UX.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Posicionamiento de la marca.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Diseño y maqueta de productos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i class="uil uil-analytics"></i>
                        <h3 className="services__title">DATA<br/>ANALYTICS</h3>
                    </div>
                    <span onClick={() => toggleTab(2)}className="services__button">+Info <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data Analytics</h3>
                            <p className="services__modal-description">Busco ser su socio estratégico para reducir costos y tiempo, integrando herramientas tecnológicas y automatizadas que sustituyan los procesos manuales</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Kpi's de gestión para la toma de decisiones.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Automatización de procesos.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Reportes inteligentes.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="serivices__modal-info">Aplicativos móvil/Web.</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services
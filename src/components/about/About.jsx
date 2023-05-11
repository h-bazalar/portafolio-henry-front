import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import  CV from "../../assets/henry-CV.pdf";
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Sobre mi</h2>
            <span className="section__subtitle"></span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                
                <div className="about__data">
                    <Info />

                    <p className="about__description">Creo soluciones a partir de tecnologías y lenguajes como JavaScript, NodeJS, React, MySQL, Python, SQL, Power BI, Power App, Power Automate, y otras que me permiten optimizar el tiempo en el desarrollo de páginas Web (backend/Frontend), reportes inteligentes, y automatización de procesos.</p>

                    <a download="" href={CV} className="button button--flex_3">Descarga mi CV
                    <i class="uil uil-file-download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Data =() => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Henry Bazalar
            </h1>
            <h3 className="home__subtitle">
                <TypeAnimation
                sequence={[
                "Developer",
                2000,
                "Designer Web",
                2000,
                "Data Analytics",
                2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
                />
            </h3>
            <p className="home__description">Soy curioso, creativo, analítico, de Lima-Perú; muy apasionado y dedicado a mi trabajo.</p>
            <a href="#contact" className="button button--flex_1">
            Di Hola
            <i class="uil uil-message"></i>   
            </a>
        </div>  
    )
}

export default Data
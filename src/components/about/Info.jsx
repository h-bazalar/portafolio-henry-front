import React from "react"


const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="uil uil-award-alt"></i>
                <h3 className="about_title">Experiencia</h3>
                <span className="about__subtitle">+10 años</span>
            </div>

            <div className="about__box">
            <i class="uil uil-briefcase-alt"></i>
                <h3 className="about_title">Proyectos</h3>
                <span className="about__subtitle">5 + Projects</span>
            </div>

            <div className="about__box">
            <i class="uil uil-headphones"></i>
                <h3 className="about_title">Soporte</h3>
                <span className="about__subtitle">En línea 24/7</span>
            </div>

        </div>
    )
}

export default Info
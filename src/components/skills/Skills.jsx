import React from "react";
import "./skills.css";
import Web from "./Web";
import Datos from "./Datos";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Competencias</h2>
            <span className="section__subtitle"></span>

            <div className="skills__container container grid">
                <Web />
                <Datos />
            </div>
        </section>
    )
}

export default Skills
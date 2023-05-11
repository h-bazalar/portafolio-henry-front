import React from "react";

const Web = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                WEB DEVELOPER
                {/* <p className="frontback">(frontend y backend)</p> */}
            </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="uil uil-html5-alt"></i>
                        <div>
                        <h3 className="skills__name">HTML</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="uil uil-css3-simple"></i>
                        <div>
                        <h3 className="skills__name">JavaScript</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="uil uil-java-script"></i>
                        <div>
                        <h3 className="skills__name">React</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="uil uil-react"></i>
                        <div>
                        <h3 className="skills__name">CSS</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="uil uil-check-circle"></i>
                        <div>
                        <h3 className="skills__name">MySQL</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="uil uil-check-circle"></i>
                        <div>
                        <h3 className="skills__name">Node Js</h3> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Web
import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa'

const hero = () => {
    return (
        <section id="section-1">
            <div className="section-1-overlay">

                <div className="section-1-container">
                    <h1>We serve at your doorstep.</h1>
                    <p className="fs-3"> A Plotline Project</p>
                    <div className="section-1-explore-btn">
                        <a href="#howItWorks">
                            <span>Explore</span>
                            <span className="arrow-span"><FaAngleDoubleDown /></span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default hero;

import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcons from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


import './style.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="conteiner">
                <div className="logo-conteiner">
                    <img src={logoImg} alt="Logo proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImg} 
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <a href="" className="study">
                        <img src={studyIcons} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>

                </div>

                <span className="total-conections">
                    Total de 200 conexões já realizadas
                    <img src={purpleHeartIcon} alt="icone coração"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;
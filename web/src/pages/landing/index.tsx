import React from 'react';

import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyIcons from '../../assets/images/icons/study.svg'
import GiveClasesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="conteiner">
                <div className="logo-conteiner">
                    <img src={LogoImg} alt="Logo proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={LandingImg} 
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-conteiner">

                    <a href="" className="study">
                        <img src={StudyIcons} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-glasses">
                        <img src={GiveClasesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>

                </div>

                <span className="total-conections">
                    Total de 200 conexões já realizadas
                    <img src={PurpleHeartIcon} alt="icone coração"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;
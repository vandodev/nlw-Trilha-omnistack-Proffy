import React from 'react';
import PageHeader from '../../components/PageHeader';

import watzappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>


                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/65333466?s=460&u=81d1ac776e59ec0afe3553d25300e9061ba54b71&v=4" alt="Evandro oliveira"/>

                        <div>
                            <strong>Evandro oliveira</strong>
                            <span>Informática</span>
                        </div>

                    </header>

                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                    <br/>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over

                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$200,00</strong>
                        </p>

                        <button type="button">
                            <img src={watzappIcon} alt="watzapp"/>
                            Entrar em contato
                        </button>

                    </footer>

                </article>
            </main>

        </div>
    )
}

export default TeacherList;
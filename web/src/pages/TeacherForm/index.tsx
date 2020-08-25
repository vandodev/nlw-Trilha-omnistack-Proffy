import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import WarningIcom from '../../assets/images/icons/warning.svg'

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './style.css';



function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrivel que você quer dar aulas"
            description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>

                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="WatsApp" label="WatsApp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value:'Artes', Label:'Artes'},
                            {value:'Biologia', Label:'Biologia'},
                            {value:'Ciências', Label:'Ciências'},
                            {value:'Educação física', Label:'Educação física'},
                            {value:'Geografia', Label:'Geografia'},
                            {value:'História', Label:'História'},
                            {value:'Matemática', Label:'Matemática'},
                            {value:'Português', Label:'Português'},
                            {value:'Quimica', Label:'Quimica'},
                        ]}
                     />

                    <Input name="cost" label="Custo da sua aula por hora"/>
                    <Input name="WatsApp" label="WatsApp"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis

                        <button type="button">
                            + Novo horário
                        </button>

                        </legend>

                        <div className="schedule-item">

                        <Select
                            name="week_day"
                            label="Dia da semana"
                            options={[
                                {value:'0', Label:'Domingo'},
                                {value:'1', Label:'Segunda-feira'},
                                {value:'2', Label:'Terça-feira'},
                                {value:'3', Label:'Quarta-feira'},
                                {value:'4', Label:'Quinta-feira'},
                                {value:'5', Label:'Sexta-feira'},
                                {value:'6', Label:'Sabado'},
                                     
                                     ]}
                        />
                            <Input name="from" label="Das" type="time"/>
                            <Input name="To" label="Até" type="time"/>

                        </div>

                </fieldset>

                <footer>
                    <p>
                        <img src={WarningIcom}alt="Aviso importante"/>
                        importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="button">Salvar cadastro</button>

                </footer>

            </main>    

        </div>
    )
}

export default TeacherForm;

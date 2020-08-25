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

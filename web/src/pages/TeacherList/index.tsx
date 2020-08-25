import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/Teacher-item';
import Select from '../../components/Select';
import Input from '../../components/input/index'
import './style.css';



function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">

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

                 
                  <Input type="time" name="time" label="Hora"/>
                  
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;
import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import WarningIcom from '../../assets/images/icons/warning.svg'

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './style.css';


function TeacherForm(){

    const[name, setName] = useState('');
    const[avatar, setAvatar] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[bio, setBio] = useState('');

    const[subject, setSubject] = useState('');
    const[cost, setCost] = useState('');

    const [scheduleItems,setScheduleItems] = useState(
        [
           // {week_day:0, from:'8:00 AM', to:'4:00 PM'},
            {week_day:0,from:'',to:''}
        ]
    );
    
function addNewScheduleItem(){
    setScheduleItems([
        ...scheduleItems,
        {week_day:0,from:'',to:''}
    ]);
}

function setScheduleItenValue(position: number, field: string, value:string){

    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position){
            return{...scheduleItem, [field]:value};
        }
        return scheduleItem;
    });

    console.log(updatedScheduleItems);
    setScheduleItems(updatedScheduleItems);

}

function handleCreateClass(e:FormEvent){

    e.preventDefault();

    console.log({
        name,
        avatar,
        whatsapp,
        bio,
        subject, 
        cost,
        setScheduleItems

    })
}

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrivel que você quer dar aulas"
            description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />

                        <Input
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => {setAvatar(e.target.value)}}
                        />

                        <Input
                            name="Whatsapp"
                            label="WhatsApp"
                            value={whatsapp} 
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio} 
                            onChange={(e) => {setBio(e.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
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

                        <Input
                            name="cost" 
                            label="Custo da sua aula por hora"
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis

                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>

                            </legend>

                            {scheduleItems.map((scheduleItem, index) =>{
                                return(
                                        <div key={scheduleItem.week_day} className="schedule-item">

                                            <Select
                                                name="week_day"
                                                label="Dia da semana"
                                                value={scheduleItem.week_day}
                                                onChange={e => setScheduleItenValue(index, 'week_day', e.target.value)}
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
                                                <Input
                                                    name="from" 
                                                    label="Das" 
                                                    type="time"
                                                    value={scheduleItem.from}
                                                    onChange={e => setScheduleItenValue(index, 'from', e.target.value)}
                                                 />

                                                <Input
                                                    name="To" 
                                                    label="Até" 
                                                    type="time"
                                                    value={scheduleItem.to}
                                                    onChange={e => setScheduleItenValue(index, 'to', e.target.value)}
                                                 />

                                    </div>
                                );
                            })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={WarningIcom}alt="Aviso importante"/>
                            importante! <br />
                            Preencha todos os dados
                        </p>

                        <button type="submit">Salvar cadastro</button>

                    </footer>
                </form>
            </main>    

        </div>
    )
}

export default TeacherForm;

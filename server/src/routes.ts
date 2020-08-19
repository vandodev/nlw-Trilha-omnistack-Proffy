import express from 'express';
import db from './database/conections';
import convertHourToMinuts from './utils/convertHourToMinuts';

const routes = express.Router();

interface Scheduleitem{
    week_day : number;
    from: string;
    to:string;
}

routes.post('/classes', async (request, response) =>{
    
    const {
        name,
        avatar,
        watsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;
    
const insertedUsersId = await db('users').insert({
    name, 
    avatar,
    watsapp,
    bio,
});

const user_id = insertedUsersId[0];

const insertedClassesId = await db('classes').insert({
    subject,
    cost,
    user_id,
})

const class_id = insertedClassesId[0];
const classSchedule = schedule.map((scheduleItem: Scheduleitem) =>{
    return{
        class_id,
        week_day:scheduleItem.week_day,
        from: convertHourToMinuts(scheduleItem.from),
        to: convertHourToMinuts(scheduleItem.to),
    };
})

await db('classes_schedule').insert(classSchedule);
    return response.send();

});

export default routes;
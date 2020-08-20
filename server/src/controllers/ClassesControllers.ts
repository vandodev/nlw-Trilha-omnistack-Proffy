import {Request, Response} from 'express'
import db from '../database/conections';
import convertHourToMinuts from '../utils/convertHourToMinuts';

interface Scheduleitem{
    week_day : number;
    from: string;
    to:string;
}

export default class ClassesControllers{
    async create (request:Request, response:Response){
    
        const {
            name,
            avatar,
            watsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
        
        try{
    
            const insertedUsersId = await trx('users').insert({
                name, 
                avatar,
                watsapp,
                bio,
            });
        
            const user_id = insertedUsersId[0];
        
            const insertedClassesId = await trx('classes').insert({
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
        
            await trx('classes_schedule').insert(classSchedule);
                trx.commit();   
                return response.status(2001).send();
    
        }catch(err){
            await trx.rollback();
            return response.status(400).json({
                error:'Unexpected error while creating nrw class'
            })
        }
    
    }
}
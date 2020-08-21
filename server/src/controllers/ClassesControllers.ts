import {Request, Response} from 'express'
import db from '../database/conections';
import convertHourToMinuts from '../utils/convertHourToMinuts';

interface Scheduleitem{
    week_day : number;
    from: string;
    to:string;
}

export default class ClassesControllers{

    async index(request:Request, response:Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        //const timeInMinutos = convertHourToMinuts(filters.time as string);
        const timeInMinutes = convertHourToMinuts(time);
       
        // console.log(timeInMinutos);

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ?',[timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ?',[timeInMinutes])
        })
        //.where('classes.subject', '=', filters.subject as string)
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        //return response.send();
        return response.json(classes);
    }
    
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
        
            await trx('class_schedule').insert(classSchedule);
                trx.commit();   
                return response.status(2001).send();
    
        }catch(err){
            await trx.rollback();
            return response.status(400).json({
                error:'Unexpected error while creating new class'
            })
        }
    
    }
}
import express from 'express';
import db from './database/conections';

const routes = express.Router();

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

await db('classes').insert({
    subject,
    cost,
    user_id,
})

    return response.send();

});

export default routes;
import express from 'express';
import ClassesControllers from './controllers/ClassesControllers';


const routes = express.Router();
const classesController = new ClassesControllers();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

export default routes;
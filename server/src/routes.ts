import express from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';



const routes = express.Router();
const classesController = new ClassesControllers();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;
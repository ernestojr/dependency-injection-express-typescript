import { Router } from 'express';
import App from '../../app';
import TaskController from '../controllers/TaskController';

export default (app:App) => {
    const router = Router();
    const { TaskController: controller } = app.controllers;
    return router
        .post('/', (<TaskController> controller).create)
        .get('/', (<TaskController> controller).get)
        .get('/:id', (<TaskController> controller).getById)
        .put('/:id', (<TaskController> controller).updateById)
        .delete('/:id', (<TaskController> controller).deleteById);
};

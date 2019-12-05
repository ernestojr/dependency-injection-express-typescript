import { Request, Response } from 'express';
import Controller from '../../core/Controller';

class TaskController extends Controller {
    
    create = async (req: Request, res: Response) => {
        const { body } = req;
        const { Task } = this.app.models;
        const task = await Task.create(body);
        res.json(task).status(201);
    }

    get = async (req: Request, res: Response) => {
        const { Task } = this.app.models;
        this.app.log.debug('Task', JSON.stringify(Task.find));
        const tasks = await Task.find({});
        res.json(tasks).status(200);
    }

    getById = async (req: Request, res: Response) => {
        const { params: { id } } = req;
        const { Task } = this.app.models;
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).send('');
            return;
        }
        res.json(task).status(200);
    }

    updateById = async (req: Request, res: Response) => {
        const { body, params: { id } } = req;
        const { Task } = this.app.models;
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).end();
            return;
        }
        await Task.updateOne({ _id: id }, { $set: body });
        res.status(204).end();
    }

    deleteById = async(req: Request, res: Response) => {
        const { params: { id } } = req;
        const { Task } = this.app.models;
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).end();
            return;
        }
        await Task.deleteOne({ _id: id });
        res.status(204).end();
    }
}

export default TaskController;

import env from './config/env';

import express from 'express';
import morgan from 'morgan';
import { Logger } from 'winston';
import { Model, Document } from 'mongoose';

import tasks from './api/routes/tasks';
import Task from './api/models/Task';
import TaskController from './api/controllers/TaskController';

import logger from './config/logger';
import database from './config/database';
import web from './config/web';
import Controller from './core/Controller';

// Starting the server

class Application {

    private app:express.Application;
    public log:Logger;
    public env:{
        [key:string]:string|number;
    };

    public models:{
        [key:string]:Model<Document>;
    } = {};

    public controllers:{
        [key:string]:Controller;
    } = {};

    constructor() {
        this.env = env;
        this.app = express();
        this.logger();
        this.buildModels();
        this.buildControllers();
        this.setting();
        this.middlewares();
        this.routes();
    }

    private buildControllers() {
        this.controllers = {
            TaskController: new TaskController(this),
        };
    }

    private buildModels() {
        this.models = {
            Task: (new Task(this)).build(),
        };
    }

    private logger() {
        this.log = logger;
    }

    private setting() {
        this.app.set('port', web(this).port);
        this.app.set('env', web(this).env);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes() {
        this.app.use('/tasks', tasks(this));
    }

    public async start() {
        const port = this.app.get('port');
        await database(this);
        await this.app.listen(port);
        this.log.info('Server running', port);
    }
}

export default Application;

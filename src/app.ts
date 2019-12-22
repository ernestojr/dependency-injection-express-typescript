import env from './config/env';

import express from 'express';
import morgan from 'morgan';
import { Logger } from 'winston';
import { Model, Document } from 'mongoose';

import tasks from './api/routes/tasks';
import Task from './api/models/Task';
import TaskController from './api/controllers/TaskController';

import loggerConf from './config/logger';
import database from './config/database';
import web from './config/web';

import Controller from './core/Controller';
import Service from './core/Service';
import Exception from './core/Exception';

import ProjectService from './api/services/ProjectService';
import TaskService from './api/services/TaskService';
import UtilService from './api/services/UtilService';

// Starting the server

class Application {

    private app:express.Application;
    public logger:Logger;
    public env:{
        [key:string]:string|number;
    };

    public models:{
        [key:string]:Model<Document>;
    } = {};

    public controllers:{
        [key:string]:Controller;
    } = {};

    public services:{
        [key:string]:Service;
    } = {};

    public Exception:Exception;

    constructor() {
        this.env = env;
        this.app = express();
        this.log();
        this.buildModels();
        this.buildServices();
        this.buildControllers();
        this.setting();
        this.middlewares();
        this.routes();
    }

    private buildServices() {
        this.services = {
            ProjectService: new ProjectService(this),
            TaskService: new TaskService(this),
            UtilService: new UtilService(this),
        };
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

    private log() {
        this.logger = loggerConf;
    }

    public createException(message:string, status:number) {
        return new Exception(message, status);
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
        this.logger.info('Server running', port);
    }
}

export default Application;

import { Schema, model, Model, Document } from 'mongoose';
import BasicModel from '../../core/Model';

class Task extends BasicModel {
    private getSchema():Schema {
        return new Schema({
            title: { type: String, required: true },
            description: { type: String, required: true },
        },{ timestamps: true });
    }
    
    public build():Model<Document> {
        return model('Task', this.getSchema());
    }
}

export default Task;

import { Schema, model, Model, Document } from 'mongoose';
import BasicModel from '../../core/Model';

class User extends BasicModel {
    private getSchema():Schema {
      const opts = { timestamps: true };
        return new Schema({
            fullname: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            avatar: { type: String },
        }, opts);
    }
    
    public build():Model<Document> {
        return model('User', this.getSchema());
    }
}

export default User;

import { Schema } from 'mongoose';
import BasicModel from '../../core/BasicModel';

class User extends BasicModel {
    protected getSchema():Schema {
      const opts = { timestamps: true };
        return new Schema({
            fullname: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            avatar: { type: String },
        }, opts);
    }
    
    protected getName() {
        return 'User';
    }
}

export default User;

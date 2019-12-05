import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../../.env') });

export default {
	PORT: process.env.PORT || 3000,
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/express-test',
	NODE_ENV: process.env.NODE_ENV || 'development',
};

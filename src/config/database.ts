import mongoose from 'mongoose';

import App from '../app';

export default async (app: App) => {
  const { MONGODB_URI } = app.env;
  try {
    await mongoose.connect(<string>MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.logger.info('Database connected');
  } catch (error) {
    app.logger.error(error);
  }
};

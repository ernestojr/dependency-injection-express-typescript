import App from '../app';

export default (app:App) => {
    const { PORT, NODE_ENV } = app.env;
    return {
        port: PORT,
        env: NODE_ENV,
    };
}

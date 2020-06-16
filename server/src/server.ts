import http from 'http';
import app from './app';

const port = (): number => parseInt(process.env.PORT, 10) || 3001;

const start = (): http.Server => {
    return app.listen(port(), (): void => {
        console.log(`Server started at http://localhost:${port()}`);
    });
};

export default { start, port };

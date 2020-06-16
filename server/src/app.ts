import express from 'express';
import cookieParser from 'cookie-parser';
import middleware from './middleware';
import routes from './routes';

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middleware);

app.use(routes);

export default app;

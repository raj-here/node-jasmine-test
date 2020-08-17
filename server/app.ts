import express, { Request, Response } from 'express';
import { connect, connection } from 'mongoose';
import UserController from './controller/user.controller';

const app = express();
const PORT = process.env.PORT || 8080;


const userController = new UserController()


const connectToDb = async () => {
    connection.on('open', () => {
        console.info('Connected to Mongo.');
    });
    connection.on('error', (err: any) => {
        console.error("Error While connecting to DB");
    });
    try {
        await connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {

    }
}

connectToDb();

app.get('/users', userController.getUsers);
app.post('/createUser', userController.createUser);

app.get("/", (request: Request, response: Response) => {
    response.status(200).send("TEST API");
});

app.get("/test", (request: Request, response: Response) => {
    response.status(500).send({ "message": "This is an error response" });
});

export const server = app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT} ......`);
});
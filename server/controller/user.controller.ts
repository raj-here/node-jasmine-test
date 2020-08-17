import * as express from 'express';
import { Request, Response } from 'express';

import UserModel from '../models/user.model';
import { UserManager } from '../manager/user.manager';

class UserController {
    public router = express.Router();

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await UserManager.findUsers();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const userModel = new UserModel(req.body);
            const newUser = await UserManager.createUser(userModel);
            return res.status(200).send(newUser);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export default UserController;
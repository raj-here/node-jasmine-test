import { DocumentQuery } from 'mongoose';

import UserModel, { IUserModel } from '../models/user.model';

export class UserManager {
  static createUser(user: IUserModel): Promise<IUserModel> {
    return UserModel.create(user);
  }

  static findUsers(query?: {[key: string]: any}): DocumentQuery<IUserModel[], IUserModel> {
    return UserModel.find(query || {});
  }
}
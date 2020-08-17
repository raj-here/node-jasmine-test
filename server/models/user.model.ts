import mongoose, { Document, Schema } from 'mongoose';

export interface IUserModel extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

// Export the model and return your IUser interface
const UserModel = mongoose.model<IUserModel>('User', UserSchema);
export default UserModel;
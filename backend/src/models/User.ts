import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {}
User.init({
    userID: DataTypes.STRING,
    status: DataTypes.STRING,
    position: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE
}, { sequelize, modelName: 'user' });

export default User;

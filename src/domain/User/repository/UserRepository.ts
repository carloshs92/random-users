import axios from "axios";
import { User } from "../IUser";
import IIDGenerator from "../../_utils/IDGenerator/IIDGenerator";
import { IStorage } from "../../_utils/Storage/IStorage";
import { userEntity } from "../entity";
import UserEntity from "../entity/UserEntity";
import { IUserRepository } from "./IUserRepository";

export default class UserRepository implements IUserRepository {
    private _storage: IStorage;
    private _idGenerator: IIDGenerator;

    constructor(storage: IStorage, idGenerator: IIDGenerator) {
        this._storage = storage;
        this._idGenerator = idGenerator;
    }

    public async findRandomUser() {
        const response = await axios.get('https://randomuser.me/api/')
        const user = userEntity({
            name: response.data.results[0].name.first,
            lastName: response.data.results[0].name.last,
            email: response.data.results[0].email,
            phoneNumber: response.data.results[0].phone,
        });
        user.id = this._idGenerator.generate();
        user.active = true;
        return user;
    }

    public async pushUser(user: UserEntity) {
        const users = await this._storage.getItem('users');
        if (users) {
            const parsedUsers = JSON.parse(users) as User[];
            const usersEntity = parsedUsers.map(parsedUser => {
                const u = userEntity({
                    name: parsedUser.name,
                    lastName: parsedUser.lastName,
                    email: parsedUser.email,
                    phoneNumber: parsedUser.phoneNumber,
                });
                u.id = parsedUser.id;
                u.active = false;
                return u;
            })
            if (usersEntity.length > 5) {
                usersEntity.shift();
            }
            usersEntity.push(user);
            await this._storage.setItem('users', JSON.stringify(usersEntity.map(ue => ue.toJSON())));
        } else {
            await this._storage.setItem('users', JSON.stringify([user.toJSON()]));
        }
    }

    public async getUsers() {
        const users = await this._storage.getItem('users');
        if (users) {
            const parsedUsers = JSON.parse(users) as User[];
            const usersEntity = parsedUsers.map(parsedUser => {
                const u = userEntity({
                    name: parsedUser.name,
                    lastName: parsedUser.lastName,
                    email: parsedUser.email,
                    phoneNumber: parsedUser.phoneNumber,
                });
                u.id = parsedUser.id;
                u.active = parsedUser.active;
                return u;
            })
            return usersEntity.reverse();
        }
        return [];
    }

}
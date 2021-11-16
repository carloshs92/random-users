import { User } from "../IUser";
import { UserEntityParams } from "./UserEntityParams";


export default class UserEntity {
    private _id: string;
    private _email: string;
    private _name: string;
    private _lastName: string;
    private _phoneNumber: string;
    private _active: boolean = false;

    constructor(params: UserEntityParams) {
        this._id = '';
        this._email = params.email;
        this._name = params.name;
        this._lastName = params.lastName;
        this._phoneNumber = params.phoneNumber;
    }

    set id(id: string) {
        this._id = id;
    }

    set active(active: boolean) {
        this._active = active;
    }

    public toJSON(): User {
        return {
            id: this._id,
            active: this._active,
            email: this._email,
            name: this._name,
            lastName: this._lastName,
            phoneNumber: this._phoneNumber,
        };
    }
}
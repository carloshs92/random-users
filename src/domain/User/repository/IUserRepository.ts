import UserEntity from "../entity/UserEntity";

export interface IUserRepository {
    findRandomUser(): Promise<UserEntity>;
    pushUser(user: UserEntity): void;
    getUsers(): Promise<UserEntity[]>;
}
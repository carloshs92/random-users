import { User } from "../IUser";
import UserEntity from "../entity/UserEntity";
import { IUserRepository } from "../repository/IUserRepository";

export default class GetUsersUseCase {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    public async execute(): Promise<User[]> {
        const userEntity = await this._userRepository.findRandomUser();
        await this._userRepository.pushUser(userEntity);
        const users = await this._userRepository.getUsers();
        return users.map((u: UserEntity) => u.toJSON());
    }
}
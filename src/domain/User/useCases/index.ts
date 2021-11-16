import { userRepository } from "../repository";
import GetUsersUseCase from "./GetUsersUseCase";

const getUsersUseCase = () => {
    return (new GetUsersUseCase(userRepository())).execute();
}

const UserUseCases = {
    getUsersUseCase
}

export default UserUseCases;
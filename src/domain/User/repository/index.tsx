import { IDGenerator } from "../../_utils/IDGenerator";
import { localStorage } from "../../_utils/Storage";
import UserRepository from "./UserRepository";

const userRepository = () => new UserRepository(
    localStorage(),
    IDGenerator()

);

export {
    userRepository
}
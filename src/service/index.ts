import {UserService} from "./UserService";
import {userRepository} from "../repository/index.";

export const userService = new UserService({repository: userRepository});
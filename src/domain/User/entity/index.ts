import UserEntity from "./UserEntity";
import { UserEntityParams } from "./UserEntityParams";

const userEntity = (params: UserEntityParams ) => new UserEntity(params);

export {
    userEntity
}
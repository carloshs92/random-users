import {UserRepository} from "../repository/UserRepository";

interface UserServiceProps {
  repository: UserRepository
}

export class UserService {
  constructor(private props: UserServiceProps) {
  }

  findRandomUser() {
    return this.props.repository.findRandomUser();
  }
}
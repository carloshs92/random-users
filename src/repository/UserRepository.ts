import axios from 'axios';

export class UserRepository {
  async findRandomUser() {
    const response = await axios.get('https://randomuser.me/api/')
    return {
      name: response.data.results[0].name.first,
      lastName: response.data.results[0].name.last,
      email: response.data.results[0].email,
      phoneNumber: response.data.results[0].phone,
    }
  }
}
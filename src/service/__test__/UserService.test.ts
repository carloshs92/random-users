import {UserService} from "../UserService";
import {UserRepository} from "../../repository/UserRepository";

describe('UserService', () => {
  describe('findRandomUser', () => {
    it('should return random user', async () => {
      // Prepare
      const repository = {
        findRandomUser: jest.fn(() => {
          return {
            name: 'Juan',
            lastName: 'Perez',
            email: 'jperez@foobar.com'
          }
        })
      } as unknown as UserRepository;

      const service = new UserService({repository});

      // Execute
      const response = await service.findRandomUser();

      // Validate
      expect(response).toEqual({
        name: 'Juan',
        lastName: 'Perez',
        email: 'jperez@foobar.com'
      });
      expect(repository.findRandomUser).toBeCalledWith();
    });
  });
});
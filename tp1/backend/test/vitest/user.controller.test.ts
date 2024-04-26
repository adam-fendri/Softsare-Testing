
import { UserSignUpDTO } from 'src/user/dto/user-signup.dto';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { describe, vi,it,expect, beforeEach } from 'vitest';

describe('UserController ', () => {
  let controller: UserController;
  let userService: Partial<UserService>;

  beforeEach(() => {
    userService = {
      signup: vi.fn(),
      login: vi.fn(),
    };

    controller = new UserController(userService as UserService);
  });

  it('signupuser should call userService.signup', async () => {
   
    const userData: UserSignUpDTO = {
      signUpFirstName: 'aziz',
      signUpLastName: 'aziz',
      signUpMail: 'aziz.aziz@free.com',
      signUpAdress: 'adress',
      signUpPostCode: '1111',
      signUpPassword: 'password',
      signUpPasswordConfirm: 'password',
    };

    
    await controller.signupuser(userData);

    expect(userService.signup).toHaveBeenCalledWith(userData);
  });


});

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../src/user/user.entity';
import { Repository } from 'typeorm';
type UserInput = Partial<Omit<User, 'id'>>;

@Injectable()
export class UserManagement {
  private uniqueCounter = 0;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async givenUser(input: UserInput) {
    const user = new User('1', '2', 'a', 'b', true);
    return await this.userRepository.save(user);
  }

  /*  private defaultFieldsFactory(): Omit<User, 'id'> {
    this.uniqueCounter++;
    return {
      email: `${this.uniqueCounter}email@email.com`,
      password: '123',
      firstName: `John${this.uniqueCounter}`,
      lastName: 'Doe',
      isActive: true,
    };
  }*/
}

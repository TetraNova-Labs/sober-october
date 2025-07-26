import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';

@Controller('sandbox')
export class SandboxController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // TODO - delete before production
  @Get('users-test')
  getUsersFromSandbox(): Promise<User[]> {
    return this.userRepository.find();
  }
}

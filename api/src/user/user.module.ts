import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // defines which repositories are registered in the current scope
  providers: [UserService],
  controllers: [UserController],
  /*
        By re-exporting TypeOrmModule it is possible to use User repository (Repository<User>) outside of this module.
        If commenting out the exports, the server would run to an error! why? check the sandbox.module.ts
     */
  exports: [TypeOrmModule],
})
export class UserModule {}

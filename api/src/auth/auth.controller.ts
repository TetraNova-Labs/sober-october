import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt";
import { encodePassword } from "../utils/encodePassword";
import { EntityManager } from "typeorm";
import { User } from "../user/user.entity";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private em: EntityManager,
  ) {}
  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Request() req) {
    return req.user;
  }

  @Post("register")
  async register(registerDto: RegisterDto) {
    const salt = bcrypt.genSaltSync();
    const encodedPassword = await encodePassword(registerDto.password, salt);

    const user = new User(
      registerDto.email,
      encodedPassword,
      salt,
      "honza",
      "pírko",
      true,
    );
    await this.em.getRepository(User).save(user);
  }

  /*  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: Record<string, string>) {
    return this.authService.(signInDto.userName, signInDto.password);
  }*/
}

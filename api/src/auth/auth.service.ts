import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { encodePassword } from "../utils/encodePassword";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException("User with that email does not exist");
    }
    const encodedPassword = await encodePassword(password, user.salt);
    if (encodedPassword !== user.password) {
      throw new UnauthorizedException(
        "Wrong email or password for combination",
      );
    }

    const payload = { sub: user.id, userEmail: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}

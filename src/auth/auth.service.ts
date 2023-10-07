import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService
  ) { }

  async login() {
    return 'login'
  }

  async register(registerDto: RegisterDto) {

    const findUser = await this.userService.findOneByEmail(registerDto.email)
    if (findUser) {
      throw new BadRequestException('Email ya existe!')
    }
    const newUser = await this.userService.create(registerDto)

    return newUser
  }

}

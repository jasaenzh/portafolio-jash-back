import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from "bcryptjs"
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) { }


  async register({ email, name, password }: RegisterDto) {

    const findUser = await this.userService.findOneByEmail(email)
    if (findUser) {
      throw new BadRequestException('Email ya existe!')
    }
    const newUser = await this.userService.create({
      name,
      email,
      password: await bcryptjs.hash(password, 10)
    })

    return newUser
  }

  async login({ email, password }: LoginDto) {

    const findUser = await this.userService.findOneByEmail(email)

    if (!findUser) {
      throw new UnauthorizedException('Email o Contraseña incorrectos')
    }

    const isPasswordValid = await bcryptjs.compare(password, findUser.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email o Contraseña incorrectos')
    }

    const payload = { email: findUser.email }

    const token = await this.jwtService.signAsync(payload)

    return {
      token,
      email
    }
  }


}

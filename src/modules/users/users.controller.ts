import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";
import { UsersModule } from "./entities/user.entities";

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) { }

  @Get()
  async getUser(): Promise<UsersModule[]> {
    const users: UsersModule[] = await this.userService.getAllUsers()
    return users
  }
}
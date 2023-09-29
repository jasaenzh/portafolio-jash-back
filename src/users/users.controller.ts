import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./entities/user.entities";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser: User = await this.userService.create(createUserDto)
      return newUser
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Nombre ya existe')
      }
      throw error
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    const users: User[] = await this.userService.findAll()
    return users
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const findById: User = await this.userService.findOne(id)
    if (!findById) throw new NotFoundException('Usuario no encontrado')
    return findById
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<{ user: User; message: string }> {
    return await this.userService.update(id, updateUserDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return await this.userService.delete(id);
  }

}
import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./schemas/user.schema";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) { }

  @Get()
  async findAll(): Promise<User[]> {
    const users: User[] = await this.userService.findAll()
    return users
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const findById: User = await this.userService.findOne(id)
    if (!findById) throw new NotFoundException('Usuario no encontrado')
    return findById
  }

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

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<User> {
    const deleteUser: User = await this.userService.delete(id)
    if (!deleteUser) throw new NotFoundException('Usuario no encontrado')
    return deleteUser;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    const updateUser: User = await this.userService.update(id, updateUserDto)
    if (!updateUser) throw new NotFoundException('Usuario no encontrado')
    return updateUser;
  }

}
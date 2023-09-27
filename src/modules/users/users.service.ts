import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async findAll(): Promise<User[]> {

    const users: User[] = await this.userModel.find()
    return users
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto)
    await newUser.save()
    return newUser
  }

  async findOne(id: string): Promise<User> {
    const findById: User = await this.userModel.findById(id);
    return findById;
  }

  async delete(id: string): Promise<User> {
    const findById: User = await this.userModel.findByIdAndDelete(id);
    return findById
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updateUser: User = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
    return updateUser
  }

}

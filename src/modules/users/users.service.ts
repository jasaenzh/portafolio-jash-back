import { Injectable } from "@nestjs/common";
import { UsersModule } from "./entities/user.entities";

@Injectable()
export class UserService {

  arrayUsers: UsersModule[]
  constructor() {
    this.arrayUsers = [
      {
        id: 1,
        name: "Jhon",
        lastname: "Doe"
      },
      {
        id: 2,
        name: "Angela",
        lastname: "Ortiz"
      }
    ]
  }

  async getAllUsers(): Promise<UsersModule[]> {
    return this.arrayUsers
  }

}
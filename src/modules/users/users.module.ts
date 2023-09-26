import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
  exports: []
})

export class UsersModule { }
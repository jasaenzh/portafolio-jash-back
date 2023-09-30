import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "./entities/user.entities";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfilesImagesModule } from "src/profileImages/profileImages.module";
import { ProfilesImagesService } from "src/profileImages/profileImages.service";

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProfilesImagesModule],
  controllers: [UsersController],
  providers: [UserService, ProfilesImagesService],
  exports: []
})

export class UsersModule { }
import { Module } from "@nestjs/common";
import { SkillController } from "./users.controller";
import { SkillService } from "./users.service";
import { Skills } from "./entities/skill";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfilesImagesModule } from "src/profileImages/profileImages.module";
import { ProfilesImagesService } from "src/profileImages/profileImages.service";

@Module({
  imports: [TypeOrmModule.forFeature([Skills]), ProfilesImagesModule],
  controllers: [SkillController],
  providers: [SkillService, ProfilesImagesService],
  exports: []
})

export class UsersModule { }
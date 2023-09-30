import { Module } from "@nestjs/common";
import { ProfilesImagesController } from "./profileImages.controller";
import { ProfilesImagesService } from "./profileImages.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileImages } from "./entities/profilesImages.entities";

@Module({
  imports: [TypeOrmModule.forFeature([ProfileImages])],
  providers: [ProfilesImagesService],
  controllers: [ProfilesImagesController],
  exports: [TypeOrmModule]
})
export class ProfilesImagesModule { }
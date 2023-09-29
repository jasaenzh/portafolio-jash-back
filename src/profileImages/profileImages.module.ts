import { Module } from "@nestjs/common";
import { ProfilesImagesController } from "./profileImages.controller";
import { ProfilesImagesService } from "./profileImages.service";

@Module({
  imports: [],
  providers: [ProfilesImagesService],
  controllers: [ProfilesImagesController],
  exports: []
})
export class ProfilesImagesModule { }
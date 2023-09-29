import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { ProfilesImagesService } from "./profileImages.service";
// import { ProfileImages } from "./entities/profilesImages.entities";

@Controller('profiles-images')
export class ProfilesImagesController {

  constructor(private readonly profileImagesService: ProfilesImagesService) { }

  @Post()
  async create(): Promise<string> {
    return this.profileImagesService.createImage()
  }

  @Get()
  async findAll(): Promise<string> {
    return this.profileImagesService.getAllImages()
  }

  @Get(':id')
  async findOne(): Promise<string> {
    return this.profileImagesService.getImage()
  }

  @Patch(':id')
  async update(): Promise<string> {
    return this.profileImagesService.updateImage()
  }

  @Delete(':id')
  async delete(): Promise<string> {
    return this.profileImagesService.deleteImage()
  }

}
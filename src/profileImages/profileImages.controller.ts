// import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProfilesImagesService } from "./profileImages.service";
import { CreateProfilesImagesDto } from "./dtos/create-profilesImages.dto";
// import { UpdateProfilesImagesDto } from "./dtos/update-profilesImages.dto";
import { ProfileImages } from "./entities/profilesImages.entities";
// import { ProfileImages } from "./entities/profilesImages.entities";

@Controller('profiles-images')
export class ProfilesImagesController {

  constructor(private readonly profileImagesService: ProfilesImagesService) { }

  @Post()
  async create(@Body() createProfileImageDto: CreateProfilesImagesDto): Promise<ProfileImages> {
    return this.profileImagesService.createImage(createProfileImageDto)
  }

  @Get()
  async findAll(): Promise<ProfileImages[]> {
    return this.profileImagesService.getAllImages()
  }

  // @Get(':id')
  // // async findOne(@Param('id') id: number): Promise<string> {
  // // return this.profileImagesService.getImage(id)
  // async findOne(): Promise<string> {
  //   return this.profileImagesService.getImage()
  // }

  // @Patch(':id')
  // // async update(@Param('id') id: number, @Body() updateProfilesImagesDto: UpdateProfilesImagesDto): Promise<string> {
  // // return this.profileImagesService.updateImage(id, updateProfilesImagesDto)
  // async update(): Promise<string> {
  //   return this.profileImagesService.updateImage()
  // }

  // @Delete(':id')
  // // async delete(@Param('id') id: number): Promise<string> {
  // // return this.profileImagesService.deleteImage(id)
  // async delete(): Promise<string> {
  //   return this.profileImagesService.deleteImage()
  // }

}
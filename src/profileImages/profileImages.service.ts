import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProfileImages } from "./entities/profilesImages.entities";
import { Repository } from "typeorm";
import { CreateProfilesImagesDto } from "./dtos/create-profilesImages.dto";

@Injectable()
export class ProfilesImagesService {

  constructor(
    @InjectRepository(ProfileImages)
    private readonly profilesImagesRepository: Repository<ProfileImages>
  ) { }

  async createImage(createProfileImage: CreateProfilesImagesDto): Promise<ProfileImages> {
    return await this.profilesImagesRepository.save(createProfileImage)
  }

  async getAllImages(): Promise<ProfileImages[]> {
    return await this.profilesImagesRepository.find()
  }

  // async getImage(): Promise<string> {
  //   return 'Estamos en el service getImage ProfileImages'
  // }

  // async updateImage(): Promise<string> {
  //   return 'Estamos en el service updateImage ProfileImages'
  // }

  // async deleteImage(): Promise<string> {
  //   return 'Estamos en el service deleteImage ProfileImages'
  // }

}
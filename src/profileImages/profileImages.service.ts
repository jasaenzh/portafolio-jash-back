import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProfileImages } from "./entities/profilesImages.entities";
import { Repository } from "typeorm";

@Injectable()
export class ProfilesImagesService {

  constructor(
    @InjectRepository(ProfileImages)
    private readonly profilesImagesRepository: Repository<ProfileImages>
  ) { }

  async createImage(): Promise<string> {
    return 'Estamos en el service createImage ProfileImages'
  }

  async getAllImages(): Promise<string> {
    return 'Estamos en el service getAllImages ProfileImages'
  }

  async getImage(): Promise<string> {
    return 'Estamos en el service getImage ProfileImages'
  }

  async updateImage(): Promise<string> {
    return 'Estamos en el service updateImage ProfileImages'
  }

  async deleteImage(): Promise<string> {
    return 'Estamos en el service deleteImage ProfileImages'
  }

}
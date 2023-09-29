import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateProfilesImagesDto {
  @IsUrl()
  @IsNotEmpty()
  url: string
}
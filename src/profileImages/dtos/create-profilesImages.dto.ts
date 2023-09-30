import { IsString, MinLength } from "class-validator";

export class CreateProfilesImagesDto {

  @IsString()
  name_src: string

  @IsString()
  @MinLength(3)
  url: string

}
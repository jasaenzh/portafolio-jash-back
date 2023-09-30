import { IsOptional, IsString } from "class-validator";

export class UpdateProfilesImagesDto {

  @IsString()
  @IsOptional()
  name_src?: string

  @IsString()
  @IsOptional()
  url?: string
}
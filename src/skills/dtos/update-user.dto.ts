import { IsOptional, IsString } from "class-validator";

export class UpdateSkillDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  name_src?: string;
}
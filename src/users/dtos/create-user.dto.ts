import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  birthdate: string;

  @IsString()
  @IsOptional()
  profileImages?: string;
}

import { IsDate, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  private _birthdate?: Date;

  @IsDate()
  @IsOptional()
  set birthdate(value: string | Date) {
    // Si el valor es una cadena, intenta convertirlo a Date
    if (typeof value === 'string') {
      this._birthdate = new Date(value);
    } else {
      this._birthdate = value;
    }
  }

  get birthdate(): Date {
    return this._birthdate;
  }
}
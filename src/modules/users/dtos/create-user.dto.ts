import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  private _birthdate: Date;

  @IsDate()
  @IsNotEmpty()
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

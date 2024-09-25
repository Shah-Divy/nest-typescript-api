import { IsString, IsNumber } from 'class-validator';

export class DetailsDto {

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsNumber()
  age: number;
}

import { IsString, IsNumber } from 'class-validator';

export class ProductDto {

  @IsString()
  modelname: string;

  @IsString()
  companyname: string;

  @IsNumber()
  price: number;
}

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateFoundPetDto {
  @IsOptional()
  @IsString()
  pet_name?: string;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

  @IsOptional()
  @IsString()
  contact_phone?: string;
}
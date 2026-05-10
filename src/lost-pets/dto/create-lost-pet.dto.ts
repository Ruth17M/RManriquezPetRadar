import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateLostPetDto {
  @IsString()
  pet_name!: string;

  @IsString()
  species!: string;

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
import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { FoundPetsService } from './found-pets.service';
import { CreateFoundPetDto } from './dto/create-found-pet.dto';

@Controller('found-pets')
export class FoundPetsController {
  constructor(private readonly foundPetsService: FoundPetsService) {}

  @Post()
  create(@Body() dto: CreateFoundPetDto) {
    return this.foundPetsService.create(dto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll() {
    return this.foundPetsService.findAll();
  }
}

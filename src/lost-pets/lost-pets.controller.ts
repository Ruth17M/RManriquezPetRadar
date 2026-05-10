import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { LostPetsService } from './lost-pets.service';
import { CreateLostPetDto } from './dto/create-lost-pet.dto';

@Controller('lost-pets')
export class LostPetsController {
  constructor(private readonly lostPetsService: LostPetsService) {}

  @Post()
  create(@Body() dto: CreateLostPetDto) {
    return this.lostPetsService.create(dto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll() {
    return this.lostPetsService.findAllActive();
  }
}
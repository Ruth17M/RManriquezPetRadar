import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundPet } from './found-pets.entity';
import { LostPet } from '../lost-pets/lost-pet.entity';
import { FoundPetsService } from './found-pets.service';
import { FoundPetsController } from './found-pets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FoundPet, LostPet])],
  providers: [FoundPetsService],
  controllers: [FoundPetsController],
})
export class FoundPetsModule {}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LostPet } from './lost-pet.entity';
import { CreateLostPetDto } from './dto/create-lost-pet.dto';

@Injectable()
export class LostPetsService {
  constructor(
    @InjectRepository(LostPet)
    private readonly lostPetRepo: Repository<LostPet>,
  ) {}

  create(dto: CreateLostPetDto): Promise<LostPet> {
    const pet = this.lostPetRepo.create(dto);
    return this.lostPetRepo.save(pet);
  }

  findAllActive(): Promise<LostPet[]> {
    return this.lostPetRepo.find({ where: { is_active: true } });
  }

  findAll(): Promise<LostPet[]> {
    return this.lostPetRepo.find();
  }
}
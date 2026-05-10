import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { FoundPet } from './found-pets.entity';
import { LostPet } from '../lost-pets/lost-pet.entity';
import { CreateFoundPetDto } from './dto/create-found-pet.dto';

@Injectable()
export class FoundPetsService {
  constructor(
    @InjectRepository(FoundPet)
    private readonly foundPetRepo: Repository<FoundPet>,
    private readonly dataSource: DataSource,
  ) {}

  async create(dto: CreateFoundPetDto): Promise<{ foundPet: FoundPet; nearbyLostPets: LostPet[] }> {
    // 1. Guardar la mascota encontrada
    const pet = this.foundPetRepo.create(dto);
    const foundPet = await this.foundPetRepo.save(pet);

    // 2. Buscar mascotas perdidas en radio de 500 metros con PostGIS
    const nearbyLostPets = await this.dataSource.query(
      `
      SELECT * FROM lost_pets
      WHERE is_active = true
      AND ST_DWithin(
        ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
        ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
        500
      )
      `,
      [dto.longitude, dto.latitude],
    );

    return { foundPet, nearbyLostPets };
  }

  findAll(): Promise<FoundPet[]> {
    return this.foundPetRepo.find();
  }
}
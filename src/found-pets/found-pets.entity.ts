import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('found_pets')
export class FoundPet {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, type: 'varchar' })
  pet_name?: string | null;

  @Column({ nullable: true, type: 'varchar' })
  species?: string | null;

  @Column({ nullable: true, type: 'varchar' })
  breed?: string | null;

  @Column({ nullable: true, type: 'varchar' })
  color?: string | null;

  @Column({ nullable: true, type: 'varchar' })
  description?: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitude?: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  longitude?: number;

  @Column({ nullable: true, type: 'varchar' })
  contact_phone?: string | null;

  @CreateDateColumn()
  created_at?: Date;
}
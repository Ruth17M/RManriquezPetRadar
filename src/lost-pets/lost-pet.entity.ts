import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lost_pets')
export class LostPet {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar' })
  pet_name!: string;

  @Column({ type: 'varchar' })
  species!: string;

  @Column({ nullable: true, type: 'varchar' })
  breed!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  color?: string | null;

  @Column({ nullable: true, type: 'varchar' })
  description?: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitude?: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  longitude?: number;

  @Column({ type: 'boolean', default: true })
  is_active?: boolean;

  @Column({ nullable: true, type: 'varchar' })
  contact_phone?: string | null;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
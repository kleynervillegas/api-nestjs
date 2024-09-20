
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity{
  @PrimaryColumn()
  id: number;

  @Column()
  name: string; 
}
import { Breed } from '../../breeds/entities/breed.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cat {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    //cascade: True
    eager: true, //para que traiga las razas al hacer un findOne
  })
  breed: Breed;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email', })
  user: User;

  @Column()
  userEmail: string;
  
}

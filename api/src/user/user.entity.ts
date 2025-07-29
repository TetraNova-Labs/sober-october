import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChallenge } from 'src/challenge/userChallenge.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'varchar'})
  password: string;

  @Column({type: 'varchar'})
  firstName: string;

  @Column({type: 'varchar'})
  lastName: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => UserChallenge, UserChallenge => UserChallenge.user)
  userChallenges: UserChallenge[];
}

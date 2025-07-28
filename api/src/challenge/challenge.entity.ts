import { UserChallenge } from 'src/challenge/userChallenge.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UserChallenge, UserChallenge => UserChallenge.challenge)
  userChallenges: UserChallenge[];

}
import { User } from 'src/user/user.entity';
import { UserChallenge } from 'src/user_challenge/user_challenge.entity';
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
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChallenge } from 'src/user_challenge/user_challenge.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => UserChallenge, UserChallenge => UserChallenge.user)
  userChallenges: UserChallenge[];
}

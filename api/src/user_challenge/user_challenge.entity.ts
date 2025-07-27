import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../user/user.entity';
import { Challenge } from '../challenge/challenge.entity';

@Entity()
export class UserChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userChallenges)
  user: User;

  @ManyToOne(() => Challenge, challenge => challenge.userChallenges)
  challenge: Challenge;

  @Column({ type: 'timestamp' })
  joinedAt: Date;
}

import { User } from 'src/user/user.entity';
import { ActivityType } from 'src/activity/activityType.entity';
import { ActivityLogMedia } from 'src/activity/activityLogMedia.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.ActivityLogs)
  user: User;

  @ManyToOne(() => ActivityType, (activityType) => activityType.ActivityLogs)
  activityType: ActivityType;

  @OneToMany(
    () => ActivityLogMedia,
    (activityLogMedia) => activityLogMedia.ActivityLog,
  )
  activityLogMedias: ActivityLogMedia;
}

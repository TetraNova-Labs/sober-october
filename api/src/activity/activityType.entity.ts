import { ActivityLog } from 'src/activity/activityLog.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ActivityType {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ActivityLog, (ActivityLog) => ActivityLog.activityType)
  ActivityLogs: ActivityLog[];
}

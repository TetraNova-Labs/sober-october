import { ActivityLog } from 'src/activity/activityLog.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ActivityLogMedia {
  @PrimaryGeneratedColumn()
  id: number;

  //replace with media module?
  @Column({ type: 'number' })
  media_id: number;

  @ManyToOne(() => ActivityLog, (ActivityLog) => ActivityLog.activityLogMedias)
  ActivityLog: ActivityLog[];
}

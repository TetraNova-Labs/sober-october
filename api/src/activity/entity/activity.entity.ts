import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ActivityType } from "../dto/addActivity.dto";

@Entity()
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activityType: ActivityType;

  @Column()
  createdAt: Date;

  @Column()
  userId: string;

  @Column()
  distance: number;

  constructor(
    activityType: ActivityType,
    createdAt: Date,
    userId: string,
    distance: number,
  ) {
    this.activityType = activityType;
    this.createdAt = createdAt;
    this.userId = userId;
    this.distance = distance;
  }
}

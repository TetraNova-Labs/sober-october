import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ActivityType } from "../dto/addActivity.dto";

@Entity()
export class ActivityEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  activityType: ActivityType;

  @Column()
  createdAt: Date;

  @Column()
  userId: number;

  @Column()
  distance: number;

  constructor(
    activityType: ActivityType,
    createdAt: Date,
    userId: number,
    distance: number,
  ) {
    this.activityType = activityType;
    this.createdAt = createdAt;
    this.userId = userId;
    this.distance = distance;
  }
}

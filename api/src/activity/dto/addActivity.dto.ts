export type ActivityType = "RUN" | "CYCLE";

export class AddActivityDto {
  activityType: ActivityType;
  distance: number;
  createdAt: Date;
}

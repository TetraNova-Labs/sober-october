import { Command } from "@nestjs/cqrs";
import { ActivityType } from "../dto/addActivity.dto";

export class AddActivityCommand extends Command<{
  activityId: string;
}> {
  constructor(
    public readonly userId: string,
    public readonly activityType: ActivityType,
    public readonly distance: number,
    public readonly createdAt: Date,
  ) {
    super();
  }
}

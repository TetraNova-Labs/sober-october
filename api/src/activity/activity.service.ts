import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { AddActivityDto } from "./dto/addActivity.dto";
import { AddActivityCommand } from "./command/addActivity.command";

@Injectable()
export class ActivityService {
  constructor(private commandBus: CommandBus) {}

  async addActivity(userId: number, addActivityDto: AddActivityDto) {
    return this.commandBus.execute(
      new AddActivityCommand(
        userId,
        addActivityDto.activityType,
        addActivityDto.distance,
        addActivityDto.createdAt,
      ),
    );
  }
}

import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddActivityCommand } from "./addActivity.command";
import { Repository } from "typeorm";
import { ActivityEntity } from "../entity/activity.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "../../user/user.service";

@CommandHandler(AddActivityCommand)
export class AddActivityHandler implements ICommandHandler<AddActivityCommand> {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(ActivityEntity)
    private readonly activityRepository: Repository<ActivityEntity>,
  ) {}

  async execute(command: AddActivityCommand) {
    const { distance, activityType, userId, createdAt } = command;
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new Error("Non existing user is trying to create activity");
    }

    const activity = await this.activityRepository.save({
      userId: user.id,
      activityType,
      distance,
      createdAt,
    });

    return {
      activityId: activity.id,
    };
  }
}

import { Module } from "@nestjs/common";
import { AddActivityHandler } from "./command/addActivity.handler";
import { UserModule } from "../user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActivityEntity } from "./entity/activity.entity";

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([ActivityEntity])],
  providers: [AddActivityHandler],
  exports: [TypeOrmModule],
})
export class ActivityModule {}

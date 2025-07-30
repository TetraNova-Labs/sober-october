import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityType } from './activityType.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityTypeService {
  constructor(
    @InjectRepository(ActivityType)
    private readonly activityTypeRepository: Repository<ActivityType>,
  ) {}
  findOne(id: number): Promise<ActivityType | null> {
    return this.activityTypeRepository.findOneBy({ id });
  }
}

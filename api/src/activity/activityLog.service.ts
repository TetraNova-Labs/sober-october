import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityLog } from './activityLog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
  ) {}

  findOne(id: number): Promise<ActivityLog | null> {
    return this.activityLogRepository.findOneBy({ id });
  }

  findAll(): Promise<ActivityLog[]> {
    return this.activityLogRepository.find({
      relations: ['user'],
    });
  }
}

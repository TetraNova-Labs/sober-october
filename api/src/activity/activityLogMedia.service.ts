import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityLogMedia } from './activityLogMedia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityLogMediaService {
  constructor(
    @InjectRepository(ActivityLogMedia)
    private readonly activityLogMediaRepository: Repository<ActivityLogMedia>,
  ) {}
  findOne(id: number): Promise<ActivityLogMedia | null> {
    return this.activityLogMediaRepository.findOneBy({ id });
  }
}

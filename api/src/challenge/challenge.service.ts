import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Challenge } from './challenge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}
  findOne(id: number): Promise<Challenge | null> {
    return this.challengeRepository.findOneBy({ id });
  }
  findAll(): Promise<Challenge[]> {
    return this.challengeRepository.find({
      relations: ['user'],
    });
  }  
}

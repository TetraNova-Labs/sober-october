import { Controller, Get } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { Challenge } from './challenge.entity';

@Controller('/challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  async findAll(): Promise<Challenge[]> {
    return this.challengeService.findAll();
  }
}

import { Controller, Get } from '@nestjs/common';
import { VotacionService } from './votacion.service';

@Controller()
export class VotacionController {
  constructor(private readonly votacionService: VotacionService) {}

  @Get()
  getHello(): string {
    return this.votacionService.getHello();
  }
}

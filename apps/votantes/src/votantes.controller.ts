import { Controller, Get } from '@nestjs/common';
import { VotantesService } from './votantes.service';

@Controller()
export class VotantesController {
  constructor(private readonly votantesService: VotantesService) {}

  @Get()
  getHello(): string {
    return this.votantesService.getHello();
  }
}

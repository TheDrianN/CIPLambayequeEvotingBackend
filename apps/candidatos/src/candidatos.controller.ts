import { Controller, Get } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';

@Controller()
export class CandidatosController {
  constructor(private readonly candidatosService: CandidatosService) {}

  @Get()
  getHello(): string {
    return this.candidatosService.getHello();
  }
}

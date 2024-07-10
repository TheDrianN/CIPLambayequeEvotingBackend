import { Controller, Get } from '@nestjs/common';
import { ResultadosService } from './resultados.service';

@Controller()
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Get()
  getHello(): string {
    return this.resultadosService.getHello();
  }
}

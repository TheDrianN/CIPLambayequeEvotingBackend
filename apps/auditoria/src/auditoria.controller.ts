import { Controller, Get } from '@nestjs/common';
import { AuditoriaService } from './auditoria.service';

@Controller()
export class AuditoriaController {
  constructor(private readonly auditoriaService: AuditoriaService) {}

  @Get()
  getHello(): string {
    return this.auditoriaService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';

@Controller()
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Get()
  getHello(): string {
    return this.autenticacionService.getHello();
  }
}

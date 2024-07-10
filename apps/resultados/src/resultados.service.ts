import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultadosService {
  getHello(): string {
    return 'Hello World!';
  }
}

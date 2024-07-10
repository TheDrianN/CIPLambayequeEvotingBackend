import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidatosService {
  getHello(): string {
    return 'Hello World!';
  }
}

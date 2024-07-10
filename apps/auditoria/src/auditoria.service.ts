import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditoriaService {
  getHello(): string {
    return 'Hello World!';
  }
}

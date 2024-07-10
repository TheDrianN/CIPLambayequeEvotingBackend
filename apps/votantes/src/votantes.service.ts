import { Injectable } from '@nestjs/common';

@Injectable()
export class VotantesService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class VotacionService {
  getHello(): string {
    return 'Hello World!';
  }
}

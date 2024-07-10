import { Injectable } from '@nestjs/common';

@Injectable()
export class AutenticacionService {
  getHello(): string {
    return 'Hello World!';
  }
}

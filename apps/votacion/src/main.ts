import { NestFactory } from '@nestjs/core';
import { VotacionModule } from './votacion.module';

async function bootstrap() {
  const app = await NestFactory.create(VotacionModule);
  await app.listen(3000);
}
bootstrap();

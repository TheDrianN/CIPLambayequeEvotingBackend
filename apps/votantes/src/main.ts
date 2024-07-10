import { NestFactory } from '@nestjs/core';
import { VotantesModule } from './votantes.module';

async function bootstrap() {
  const app = await NestFactory.create(VotantesModule);
  await app.listen(3000);
}
bootstrap();

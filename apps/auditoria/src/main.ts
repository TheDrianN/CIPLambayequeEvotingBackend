import { NestFactory } from '@nestjs/core';
import { AuditoriaModule } from './auditoria.module';

async function bootstrap() {
  const app = await NestFactory.create(AuditoriaModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AutenticacionModule } from './autenticacion.module';

async function bootstrap() {
  const app = await NestFactory.create(AutenticacionModule);
  await app.listen(3000);
}
bootstrap();

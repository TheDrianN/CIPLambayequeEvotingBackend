import { NestFactory } from '@nestjs/core';
import { ResultadosModule } from './resultados.module';

async function bootstrap() {
  const app = await NestFactory.create(ResultadosModule);
  await app.listen(3000);
}
bootstrap();

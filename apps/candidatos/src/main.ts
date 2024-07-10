import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CandidatosModule } from './candidatos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CandidatosModule, {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 3001 },
  });
  await app.listen();
}
bootstrap();

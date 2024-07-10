import { Module } from '@nestjs/common';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';

@Module({
  imports: [],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}

import { Module } from '@nestjs/common';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';
import { CommonModule } from '@app/common';
@Module({
  imports: [CommonModule],
  controllers: [CandidatosController],
  providers: [CandidatosService],
})
export class CandidatosModule {}

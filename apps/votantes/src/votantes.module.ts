import { Module } from '@nestjs/common';
import { VotantesController } from './votantes.controller';
import { VotantesService } from './votantes.service';

@Module({
  imports: [],
  controllers: [VotantesController],
  providers: [VotantesService],
})
export class VotantesModule {}

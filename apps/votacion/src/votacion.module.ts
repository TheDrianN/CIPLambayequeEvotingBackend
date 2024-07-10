import { Module } from '@nestjs/common';
import { VotacionController } from './votacion.controller';
import { VotacionService } from './votacion.service';

@Module({
  imports: [],
  controllers: [VotacionController],
  providers: [VotacionService],
})
export class VotacionModule {}

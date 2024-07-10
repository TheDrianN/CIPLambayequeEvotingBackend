import { Test, TestingModule } from '@nestjs/testing';
import { VotacionController } from './votacion.controller';
import { VotacionService } from './votacion.service';

describe('VotacionController', () => {
  let votacionController: VotacionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VotacionController],
      providers: [VotacionService],
    }).compile();

    votacionController = app.get<VotacionController>(VotacionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(votacionController.getHello()).toBe('Hello World!');
    });
  });
});

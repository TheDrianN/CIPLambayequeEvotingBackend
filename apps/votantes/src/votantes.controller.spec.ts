import { Test, TestingModule } from '@nestjs/testing';
import { VotantesController } from './votantes.controller';
import { VotantesService } from './votantes.service';

describe('VotantesController', () => {
  let votantesController: VotantesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VotantesController],
      providers: [VotantesService],
    }).compile();

    votantesController = app.get<VotantesController>(VotantesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(votantesController.getHello()).toBe('Hello World!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CandidatosController } from './candidatos.controller';
import { CandidatosService } from './candidatos.service';

describe('CandidatosController', () => {
  let candidatosController: CandidatosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CandidatosController],
      providers: [CandidatosService],
    }).compile();

    candidatosController = app.get<CandidatosController>(CandidatosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(candidatosController.getHello()).toBe('Hello World!');
    });
  });
});

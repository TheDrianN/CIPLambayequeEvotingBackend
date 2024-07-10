import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';

describe('ResultadosController', () => {
  let resultadosController: ResultadosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ResultadosController],
      providers: [ResultadosService],
    }).compile();

    resultadosController = app.get<ResultadosController>(ResultadosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(resultadosController.getHello()).toBe('Hello World!');
    });
  });
});

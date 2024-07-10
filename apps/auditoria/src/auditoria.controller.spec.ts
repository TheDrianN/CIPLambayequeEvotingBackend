import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriaController } from './auditoria.controller';
import { AuditoriaService } from './auditoria.service';

describe('AuditoriaController', () => {
  let auditoriaController: AuditoriaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuditoriaController],
      providers: [AuditoriaService],
    }).compile();

    auditoriaController = app.get<AuditoriaController>(AuditoriaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(auditoriaController.getHello()).toBe('Hello World!');
    });
  });
});

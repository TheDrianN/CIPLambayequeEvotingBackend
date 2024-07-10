import { Test, TestingModule } from '@nestjs/testing';
import { AutenticacionController } from './autenticacion.controller';
import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionController', () => {
  let autenticacionController: AutenticacionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AutenticacionController],
      providers: [AutenticacionService],
    }).compile();

    autenticacionController = app.get<AutenticacionController>(AutenticacionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(autenticacionController.getHello()).toBe('Hello World!');
    });
  });
});

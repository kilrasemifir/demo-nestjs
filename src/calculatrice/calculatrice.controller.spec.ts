import { Test, TestingModule } from '@nestjs/testing';
import { CalculatriceController } from './calculatrice.controller';

describe('CalculatriceController', () => {
  let controller: CalculatriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatriceController],
    }).compile();

    controller = module.get<CalculatriceController>(CalculatriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

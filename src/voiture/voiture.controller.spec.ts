import { Test, TestingModule } from '@nestjs/testing';
import { VoitureController } from './voiture.controller';
import { VoitureService } from './voiture.service';

describe('VoitureController', () => {
  let controller: VoitureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoitureController],
      providers: [VoitureService],
    }).compile();

    controller = module.get<VoitureController>(VoitureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

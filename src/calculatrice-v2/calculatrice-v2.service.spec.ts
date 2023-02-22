import { Test, TestingModule } from '@nestjs/testing';
import { CalculatriceV2Service } from './calculatrice-v2.service';

describe('CalculatriceV2Service', () => {
  let service: CalculatriceV2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatriceV2Service],
    }).compile();

    service = module.get<CalculatriceV2Service>(CalculatriceV2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

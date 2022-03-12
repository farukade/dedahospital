import { Test, TestingModule } from '@nestjs/testing';
import { NextOfKinService } from './next-of-kin.service';

describe('NextOfKinService', () => {
  let service: NextOfKinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextOfKinService],
    }).compile();

    service = module.get<NextOfKinService>(NextOfKinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

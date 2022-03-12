import { Test, TestingModule } from '@nestjs/testing';
import { NextOfKinController } from './next-of-kin.controller';
import { NextOfKinService } from './next-of-kin.service';

describe('NextOfKinController', () => {
  let controller: NextOfKinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NextOfKinController],
      providers: [NextOfKinService],
    }).compile();

    controller = module.get<NextOfKinController>(NextOfKinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

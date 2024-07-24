import { Test, TestingModule } from '@nestjs/testing';
import { ProtectedController } from './protected.controller';

describe('ProtectedController', () => {
  let controller: ProtectedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtectedController],
    }).compile();

    controller = module.get<ProtectedController>(ProtectedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

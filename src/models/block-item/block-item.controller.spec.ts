import { Test, TestingModule } from '@nestjs/testing';
import { BlockItemController } from './block-item.controller';

describe('BlockItemController', () => {
  let controller: BlockItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockItemController],
    }).compile();

    controller = module.get<BlockItemController>(BlockItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BlockItemService } from './block-item.service';

describe('BlockItemService', () => {
  let service: BlockItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockItemService],
    }).compile();

    service = module.get<BlockItemService>(BlockItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

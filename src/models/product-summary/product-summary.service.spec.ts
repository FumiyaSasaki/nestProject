import { Test, TestingModule } from '@nestjs/testing';
import { ProductSummaryService } from './product-summary.service';

describe('ProductSummaryService', () => {
  let service: ProductSummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSummaryService],
    }).compile();

    service = module.get<ProductSummaryService>(ProductSummaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

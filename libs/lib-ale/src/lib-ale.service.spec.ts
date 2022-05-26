import { Test, TestingModule } from '@nestjs/testing';
import { LibAleService } from './lib-ale.service';

describe('LibAleService', () => {
  let service: LibAleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibAleService],
    }).compile();

    service = module.get<LibAleService>(LibAleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

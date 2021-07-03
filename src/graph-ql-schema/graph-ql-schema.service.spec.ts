import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlSchemaService } from './graph-ql-schema.service';

describe('GraphQlSchemaService', () => {
  let service: GraphQlSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlSchemaService],
    }).compile();

    service = module.get<GraphQlSchemaService>(GraphQlSchemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

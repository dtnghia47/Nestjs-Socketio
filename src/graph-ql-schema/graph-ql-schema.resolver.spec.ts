import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlSchemaResolver } from './graph-ql-schema.resolver';
import { GraphQlSchemaService } from './graph-ql-schema.service';

describe('GraphQlSchemaResolver', () => {
  let resolver: GraphQlSchemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlSchemaResolver, GraphQlSchemaService],
    }).compile();

    resolver = module.get<GraphQlSchemaResolver>(GraphQlSchemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

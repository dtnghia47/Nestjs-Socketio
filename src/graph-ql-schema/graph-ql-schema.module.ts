import { Module } from '@nestjs/common';
import { GraphQlSchemaService } from './graph-ql-schema.service';
import { GraphQlSchemaResolver } from './graph-ql-schema.resolver';

@Module({
  providers: [GraphQlSchemaResolver, GraphQlSchemaService]
})
export class GraphQlSchemaModule {}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphQlSchemaService } from './graph-ql-schema.service';
import { CreateGraphQlSchemaInput } from './dto/create-graph-ql-schema.input';
import { UpdateGraphQlSchemaInput } from './dto/update-graph-ql-schema.input';

@Resolver('GraphQlSchema')
export class GraphQlSchemaResolver {
  constructor(private readonly graphQlSchemaService: GraphQlSchemaService) {}

  @Mutation('createGraphQlSchema')
  create(@Args('createGraphQlSchemaInput') createGraphQlSchemaInput: CreateGraphQlSchemaInput) {
    return this.graphQlSchemaService.create(createGraphQlSchemaInput);
  }

  @Query('graphQlSchema')
  findAll() {
    return this.graphQlSchemaService.findAll();
  }

  @Query('graphQlSchema')
  findOne(@Args('id') id: number) {
    return this.graphQlSchemaService.findOne(id);
  }

  @Mutation('updateGraphQlSchema')
  update(@Args('updateGraphQlSchemaInput') updateGraphQlSchemaInput: UpdateGraphQlSchemaInput) {
    return this.graphQlSchemaService.update(updateGraphQlSchemaInput.id, updateGraphQlSchemaInput);
  }

  @Mutation('removeGraphQlSchema')
  remove(@Args('id') id: number) {
    return this.graphQlSchemaService.remove(id);
  }
}

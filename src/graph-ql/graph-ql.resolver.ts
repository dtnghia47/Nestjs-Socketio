import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphQlService } from './graph-ql.service';
import { GraphQl } from './entities/graph-ql.entity';
import { CreateGraphQlInput } from './dto/create-graph-ql.input';
import { UpdateGraphQlInput } from './dto/update-graph-ql.input';

@Resolver(() => GraphQl)
export class GraphQlResolver {
  constructor(private readonly graphQlService: GraphQlService) {}

  @Mutation(() => GraphQl)
  createGraphQl(@Args('createGraphQlInput') createGraphQlInput: CreateGraphQlInput) {
    return this.graphQlService.create(createGraphQlInput);
  }

  @Query(() => [GraphQl], { name: 'graphQl' })
  findAll() {
    return this.graphQlService.findAll();
  }

  @Query(() => GraphQl, { name: 'graphQl' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlService.findOne(id);
  }

  @Mutation(() => GraphQl)
  updateGraphQl(@Args('updateGraphQlInput') updateGraphQlInput: UpdateGraphQlInput) {
    return this.graphQlService.update(updateGraphQlInput.id, updateGraphQlInput);
  }

  @Mutation(() => GraphQl)
  removeGraphQl(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlService.remove(id);
  }
}

import { CreateGraphQlInput } from './create-graph-ql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphQlInput extends PartialType(CreateGraphQlInput) {
  @Field(() => Int)
  id: number;
}

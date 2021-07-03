import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphQlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

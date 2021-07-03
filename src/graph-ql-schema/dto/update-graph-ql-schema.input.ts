import { CreateGraphQlSchemaInput } from './create-graph-ql-schema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGraphQlSchemaInput extends PartialType(CreateGraphQlSchemaInput) {
  id: number;
}

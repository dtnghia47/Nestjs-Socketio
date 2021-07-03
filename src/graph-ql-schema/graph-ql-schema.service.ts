import { Injectable } from '@nestjs/common';
import { CreateGraphQlSchemaInput } from './dto/create-graph-ql-schema.input';
import { UpdateGraphQlSchemaInput } from './dto/update-graph-ql-schema.input';

@Injectable()
export class GraphQlSchemaService {
  create(createGraphQlSchemaInput: CreateGraphQlSchemaInput) {
    return 'This action adds a new graphQlSchema';
  }

  findAll() {
    return `This action returns all graphQlSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphQlSchema`;
  }

  update(id: number, updateGraphQlSchemaInput: UpdateGraphQlSchemaInput) {
    return `This action updates a #${id} graphQlSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphQlSchema`;
  }
}

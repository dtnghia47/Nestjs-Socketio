import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WebSocketsModule } from './web-sockets/web-sockets.module';
import { RestApiModule } from './rest-api/rest-api.module';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { GraphQlSchemaModule } from './graph-ql-schema/graph-ql-schema.module';

@Module({
  imports: [AuthModule, WebSocketsModule, RestApiModule, GraphQlModule, GraphQlSchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketsModule } from './web-sockets/web-sockets.module';
import { RestApiModule } from './rest-api/rest-api.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [
    WebSocketsModule,
    RestApiModule,
    AuthModule,
    UsersModule,
    PassportModule,
    ConfigModule.forRoot({
      // default is .env
      // envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy],
})
export class AppModule {}

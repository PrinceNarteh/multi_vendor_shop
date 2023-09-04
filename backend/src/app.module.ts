import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/multi_vender_shop'), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

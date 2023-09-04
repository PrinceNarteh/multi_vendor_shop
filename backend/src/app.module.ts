import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/multi_vender_shop'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

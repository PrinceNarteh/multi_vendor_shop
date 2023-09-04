import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/multi_vender_shop')],
  controllers: [],
  providers: [],
})
export class AppModule {}

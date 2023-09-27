import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose'
import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_URI}`),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

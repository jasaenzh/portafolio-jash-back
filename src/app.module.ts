import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProfilesImagesModule } from './profileImages/profileImages.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_jsaenzh',
      password: 'AngelaDobby1986',
      database: 'db_portafolio_jhony',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    ProfilesImagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

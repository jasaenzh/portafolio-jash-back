import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsModule } from './skills/skills.module';
import { ProfilesImagesModule } from './profileImages/profileImages.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


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
    SkillsModule,
    ProfilesImagesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

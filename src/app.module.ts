import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';
import { NextOfKinModule } from './next-of-kin/next-of-kin.module';
import { NextOfKin } from './next-of-kin/entities/next-of-kin.entity';
config()

@Module({
  imports: [UsersModule, NextOfKinModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, NextOfKin],
    synchronize: true,
  }), NextOfKinModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

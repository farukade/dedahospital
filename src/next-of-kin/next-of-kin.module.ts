import { Module } from '@nestjs/common';
import { NextOfKinService } from './next-of-kin.service';
import { NextOfKinController } from './next-of-kin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NextOfKin } from './entities/next-of-kin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NextOfKin])],
  controllers: [NextOfKinController],
  providers: [NextOfKinService]
})
export class NextOfKinModule {}

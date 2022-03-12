import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNextOfKinDto } from './dto/create-next-of-kin.dto';
import { UpdateNextOfKinDto } from './dto/update-next-of-kin.dto';
import { NextOfKin } from './entities/next-of-kin.entity';


@Injectable()
export class NextOfKinService {
  constructor(
    @InjectRepository(NextOfKin)
    private nextOfKinsRepository: Repository<NextOfKin>,
  ) {}

  async create(data: CreateNextOfKinDto) {
    const nextOfKin = this.nextOfKinsRepository.create(data);
    await this.nextOfKinsRepository.save(nextOfKin);
    return nextOfKin;
  }

  // findAll() {
  //   return `This action returns all nextOfKin`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} nextOfKin`;
  // }

  async update(id: number, data: Partial<UpdateNextOfKinDto>) {
    await this.nextOfKinsRepository.update({ id }, data);
    return await this.nextOfKinsRepository.findOne({ id });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} nextOfKin`;
  // }
}

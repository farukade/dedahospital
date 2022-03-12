import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NextOfKinService } from './next-of-kin.service';
import { CreateNextOfKinDto } from './dto/create-next-of-kin.dto';
import { UpdateNextOfKinDto } from './dto/update-next-of-kin.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NextOfKin } from './entities/next-of-kin.entity';

@ApiTags('Next-Of-Kin')
@Controller('next-of-kin')
export class NextOfKinController {
  constructor(private readonly nextOfKinService: NextOfKinService) {}

  @ApiOkResponse({type: NextOfKin})
  @ApiNotFoundResponse()
  @Post('create')
  create(@Body() createNextOfKinDto: CreateNextOfKinDto) {
    return this.nextOfKinService.create(createNextOfKinDto);
  }

  // @Get()
  // findAll() {
  //   return this.nextOfKinService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.nextOfKinService.findOne(+id);
  // }

  @ApiOkResponse({type: NextOfKin})
  @ApiNotFoundResponse()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNextOfKinDto: UpdateNextOfKinDto) {
    return this.nextOfKinService.update(+id, updateNextOfKinDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.nextOfKinService.remove(+id);
  // }
}

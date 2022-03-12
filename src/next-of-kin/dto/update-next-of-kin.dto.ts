import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateNextOfKinDto } from './create-next-of-kin.dto';

export class UpdateNextOfKinDto extends PartialType(CreateNextOfKinDto) {
  @ApiProperty()
  surname: String;
  @ApiProperty()
  otherNames: String;
  @ApiProperty()
  email: String;
  @ApiProperty()
  dateOfBirth: Date;
  @ApiProperty()
  gender: String;
  @ApiProperty()
  maritalStatus: String;
  @ApiProperty()
  hmo: String;
  @ApiProperty()
  enrolleeId?: String;
  @ApiProperty()
  occupation?: String;
  @ApiProperty()
  address?: String;
  @ApiProperty()
  phone?: String;
  @ApiProperty()
  ethnicity?: String;
  @ApiProperty()
  isStaff?: Boolean;
  @ApiProperty()
  photo: String;
}

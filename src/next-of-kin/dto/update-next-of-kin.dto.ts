import { PartialType } from '@nestjs/mapped-types';
import { CreateNextOfKinDto } from './create-next-of-kin.dto';

export class UpdateNextOfKinDto extends PartialType(CreateNextOfKinDto) {
  surname: String;
  otherNames: String;
  email: String;
  dateOfBirth: Date;
  gender: String;
  maritalStatus: String;
  hmo: String;
  enrolleeId?: String;
  occupation?: String;
  address?: String;
  phone?: String;
  ethnicity?: String;
  isStaff?: Boolean;
  photo: String;
}

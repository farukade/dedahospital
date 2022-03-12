import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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

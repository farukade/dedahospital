import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  email: String;

  @ApiProperty()
  password: String;
}

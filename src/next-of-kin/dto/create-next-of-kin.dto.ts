import { ApiProperty } from "@nestjs/swagger";

export class CreateNextOfKinDto {
  @ApiProperty()
  email: String;

}

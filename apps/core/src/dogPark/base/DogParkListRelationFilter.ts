/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DogParkWhereInput } from "./DogParkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DogParkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DogParkWhereInput,
  })
  @ValidateNested()
  @Type(() => DogParkWhereInput)
  @IsOptional()
  @Field(() => DogParkWhereInput, {
    nullable: true,
  })
  every?: DogParkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DogParkWhereInput,
  })
  @ValidateNested()
  @Type(() => DogParkWhereInput)
  @IsOptional()
  @Field(() => DogParkWhereInput, {
    nullable: true,
  })
  some?: DogParkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DogParkWhereInput,
  })
  @ValidateNested()
  @Type(() => DogParkWhereInput)
  @IsOptional()
  @Field(() => DogParkWhereInput, {
    nullable: true,
  })
  none?: DogParkWhereInput;
}
export { DogParkListRelationFilter as DogParkListRelationFilter };

/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsInt, MinLength, MaxLength } from 'class-validator';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  title: string;
  @IsInt()
  userId: string;
}
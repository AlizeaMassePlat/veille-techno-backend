/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SigninDto {
  @ApiProperty({
    example: 'monMail@gmail.com',
    required: true
 })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'MonMotdepass*au1234bonFormat',
    required: true
 })
  @IsString()
  @IsNotEmpty()
  password: string;
}
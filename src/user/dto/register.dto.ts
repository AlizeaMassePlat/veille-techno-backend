/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'Ada',
    required: true
 })
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @ApiProperty({
    example: 'Lovelace',
    required: true
 })
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @ApiProperty({
    example: 'ada.lovelace@gmail.com',
    required: true
 })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'MyStrong*Pass1278',
    required: true
 })
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @IsNotEmpty()
  password: string;
}
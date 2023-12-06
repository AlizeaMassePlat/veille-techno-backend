/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty({
    example: 'Mes choses à faire',
    required: true
 })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  title: string;
}
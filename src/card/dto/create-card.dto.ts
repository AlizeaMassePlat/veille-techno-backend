/* eslint-disable prettier/prettier */
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({
    example: 'Faire la documentation Swagger',
    required: true
 })
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;
  @ApiProperty({
    example: 'Utiliser le site https://rehmat-sayany.medium.com/ pour compléter la documentation',
    required: false
 })
  @IsOptional()
  @MinLength(1)
  @MaxLength(500)
  readonly description?: string;
  @IsInt()
  readonly listId: string;
}

/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
    IsInt,
    IsNotEmpty,
    IsOptional,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class EditCardDto {
    @ApiProperty({
      example: 'Faire parfaitement la documentation Swagger',
      required: false
   })
    @IsOptional()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    readonly title?: string;
    @ApiProperty({
      example: 'Utiliser le site https://rehmat-sayany.medium.com/ pour compléter parfaitement la documentation',
      required: false
   })
    @IsOptional()
    @MinLength(1)
    @MaxLength(500)
    readonly description?: string;
  
    @IsInt()
    readonly listId: string;
  }
  
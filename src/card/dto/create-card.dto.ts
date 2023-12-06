/* eslint-disable prettier/prettier */
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(500)
  readonly description?: string;

  @IsInt()
  readonly listId: string;
}

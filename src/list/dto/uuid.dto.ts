/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UuidDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
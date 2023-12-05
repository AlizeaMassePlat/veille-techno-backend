import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entity/list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepo: Repository<List>,
  ) {}
}

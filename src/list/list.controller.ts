import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';
import { List } from './entity/list.entity';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getList(list: List) {
    return list;
  }
}

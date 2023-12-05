import { Controller, Get, Post, Body } from '@nestjs/common';
import { ListService } from './list.service';
import { SerializeUser } from 'src/user/decorator/serialize-user.decorator';
import { UserEntity } from 'src/user/entity';
import { CreateListDto } from './dto/create-list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getList() {
    return this.listService.getLists();
  }

  @Post()
  addList(@Body() createListDto: CreateListDto, userId: string) {
    return this.listService.addList(createListDto, userId);
  }
}

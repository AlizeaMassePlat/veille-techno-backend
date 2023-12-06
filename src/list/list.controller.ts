import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { SerializeUser } from 'src/user/decorator/serialize-user.decorator';
import { UserEntity } from 'src/user/entity';
import { UuidDto } from 'src/list/dto/uuid.dto';
import { DeleteResult } from 'typeorm';

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

  @Delete(':id')
  deleteList(
    @SerializeUser() user: UserEntity,
    @Param() list: UuidDto,
  ): Promise<DeleteResult> {
    return this.listService.deleteList(user, list.id);
  }
}

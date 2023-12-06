import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { SerializeUser } from 'src/user/decorator/serialize-user.decorator';
import { UserEntity } from 'src/user/entity';
import { UuidDto } from 'src/list/dto/uuid.dto';
import { DeleteResult } from 'typeorm';
import { AccessGuard } from '../user/guard/access-token.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
@ApiTags('List')
@ApiBearerAuth('JWT-auth')
@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}
  @ApiOperation({
    summary: 'Get Lists',
    description: 'Get lists and all the information about them',
  })
  @Get()
  getList() {
    return this.listService.getLists();
  }
  @ApiOperation({
    summary: 'Post Lists',
    description: 'Post lists and all the information about them',
  })
  @Post()
  addList(@Body() createListDto: CreateListDto, userId: string) {
    return this.listService.addList(createListDto, userId);
  }

  @UseGuards(AccessGuard)
  @ApiOperation({
    summary: 'Delete Lists',
    description: 'Delete lists and all the information about them',
  })
  @Delete(':id')
  deleteList(
    @SerializeUser() user: UserEntity,
    @Param() list: UuidDto,
  ): Promise<DeleteResult> {
    return this.listService.deleteList(user, list.id);
  }
}

import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entity/card.entity';
import { UserEntity } from 'src/user/entity';
import { SerializeUser } from 'src/user/decorator/serialize-user.decorator';
import { DeleteResult } from 'typeorm';
import { UuidDto } from './dto/uuid.dto';
import { AccessGuard } from '../user/guard/access-token.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('Card')
@ApiBearerAuth('JWT-auth')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @ApiOperation({
    summary: 'Get Cards',
    description: 'Get cards and all the information about them',
  })
  @Get()
  getCard() {
    return this.cardService.getCards();
  }
  @ApiOperation({
    summary: 'Post Cards',
    description: 'Post cards and all the information about them',
  })
  @Post()
  addCard(@Body() createCardDto: CreateCardDto, userId: string) {
    return this.cardService.addCard(createCardDto, userId);
  }
  @UseGuards(AccessGuard)
  @ApiOperation({
    summary: 'Update Cards',
    description: 'Update cards and all the information about them',
  })
  @Put(':id')
  async updateCard(@Param('id') id: string, @Body() card: Card): Promise<any> {
    return this.cardService.updateCard(id, card);
  }
  @UseGuards(AccessGuard)
  @ApiOperation({
    summary: 'Delete Cards',
    description: 'Delete cards and all the information about them',
  })
  @Delete(':id')
  deleteCard(
    @SerializeUser() user: UserEntity,
    @Param() card: UuidDto,
  ): Promise<DeleteResult> {
    return this.cardService.deleteCard(user, card.id);
  }
}

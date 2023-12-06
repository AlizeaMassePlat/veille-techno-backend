import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entity/card.entity';
import { UserEntity } from 'src/user/entity';
import { SerializeUser } from 'src/user/decorator/serialize-user.decorator';
import { DeleteResult } from 'typeorm';
import { UuidDto } from './dto/uuid.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getCard() {
    return this.cardService.getCards();
  }

  @Post()
  addCard(@Body() createCardDto: CreateCardDto, userId: string) {
    return this.cardService.addCard(createCardDto, userId);
  }

  @Put(':id')
  async updateCard(@Param('id') id: string, @Body() card: Card): Promise<any> {
    return this.cardService.updateCard(id, card);
  }

  @Delete(':id')
  deletePoll(
    @SerializeUser() user: UserEntity,
    @Param() card: UuidDto,
  ): Promise<DeleteResult> {
    return this.cardService.deleteCard(user, card.id);
  }
}

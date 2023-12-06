import { Controller, Get, Body, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';

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
}

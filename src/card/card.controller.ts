import { Controller, Get } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './entity/card.entity';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getCard(card: Card) {
    return card;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepo: Repository<Card>,
  ) {}

  getCards() {
    return this.cardRepo.find();
  }
  async addCard(createCardDto: CreateCardDto, userId: string) {
    const card = this.cardRepo.create({
      title: createCardDto.title,
      description: createCardDto.description,
      user: { id: userId },
      list: { id: createCardDto.listId },
    });
    await this.cardRepo.save(card);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UserEntity } from 'src/user/entity';
import { DeleteResult } from 'typeorm';
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

  async updateCard(id: string, card: Partial<Card>): Promise<Card> {
    await this.cardRepo.update(id, card);
    return this.cardRepo.findOne({ where: { id } });
  }

  public async deleteCard(
    user: UserEntity,
    cardId: string,
  ): Promise<DeleteResult> {
    const card = await this.cardRepo.findOne({
      where: { id: cardId },
      relations: {
        user: true,
        list: true,
      },
    });
    return await this.cardRepo.delete({ id: card.id });
  }
}

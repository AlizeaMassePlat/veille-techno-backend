import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entity/list.entity';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UserEntity } from 'src/user/entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepo: Repository<List>,
  ) {}

  getLists() {
    return this.listRepo.find();
  }

  async addList(createListDto: CreateListDto, userId: string) {
    const list = this.listRepo.create({
      title: createListDto.title,
      user: { id: userId },
    });
    await this.listRepo.save(list);
  }

  public async deleteList(
    user: UserEntity,
    listId: string,
  ): Promise<DeleteResult> {
    const card = await this.listRepo.findOne({
      where: { id: listId },
      relations: {
        user: true,
      },
    });
    return await this.listRepo.delete({ id: card.id });
  }
}

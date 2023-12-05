import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entity/list.entity';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';

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
}

import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository, QueryFailedError } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { RegisterDto } from './dto/register.dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  public async register(dto: RegisterDto): Promise<UserEntity> {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.userRepo.save({
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        hash: hash,
      });

      return new UserEntity(user);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ForbiddenException(`Email ${dto.email} is already in use`);
      }

      throw error;
    }
  }
}

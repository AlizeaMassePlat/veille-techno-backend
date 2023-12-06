import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshtokenDto } from './dto';
import { EditUserDto } from './dto/edit-user.dto';
import { SerializeUser } from './decorator/serialize-user.decorator';
import { UpdateResult } from 'typeorm';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('register')
  register(@Body() dto: RegisterDto): Promise<UserEntity> {
    return this.userService.register(dto);
  }

  @Post('signin')
  signin(@Body() dto: SigninDto): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    return this.userService.signin(dto);
  }

  @Post('refresh')
  refreshToken(
    @SerializeUser() user: UserEntity,
    @Body() dto: RefreshtokenDto,
  ): Promise<{
    access_token: string;
  }> {
    return this.userService.refreshToken(user, dto);
  }

  @Patch('edit')
  editUser(
    @SerializeUser('id') userId: string,
    @Body() dto: EditUserDto,
  ): Promise<UpdateResult> {
    return this.userService.editUser(userId, dto);
  }
}

/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshtokenDto } from './dto';
import { SerializeUser } from './decorator/serialize-user.decorator';
import { User } from './entity/user.entity';
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

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<any> {
    return this.userService.update(id, user);
  }
}

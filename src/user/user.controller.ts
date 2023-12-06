/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshtokenDto } from './dto';
import { SerializeUser } from './decorator/serialize-user.decorator';
import { User } from './entity/user.entity';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth('JWT-auth')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({
    summary: 'Get Users',
    description: 'Get users and all the information about them',
  })
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @ApiOperation({
    summary: 'Register Users',
    description: 'Register users',
  })
  @Post('register')
  register(@Body() dto: RegisterDto): Promise<UserEntity> {
    return this.userService.register(dto);
  }
  @ApiOperation({
    summary: 'Sign Users',
    description: 'Sign users',
  })
  @Post('signin')
  signin(@Body() dto: SigninDto): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    return this.userService.signin(dto);
  }
  @ApiOperation({
    summary: 'Refresh token Users',
    description: 'Refresh token users',
  })
  @Post('refresh')
  refreshToken(
    @SerializeUser() user: UserEntity,
    @Body() dto: RefreshtokenDto,
  ): Promise<{
    access_token: string;
  }> {
    return this.userService.refreshToken(user, dto);
  }
  @ApiOperation({
    summary: 'Update Users',
    description: 'Update users and all the information about them',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<any> {
    return this.userService.update(id, user);
  }
}

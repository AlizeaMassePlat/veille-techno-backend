import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';
import { ListsController } from './lists/lists.controller';
import { ListsService } from './lists/lists.service';
@Module({
  imports: [ListsModule],
  controllers: [AppController, ListsController],
  providers: [AppService, ListsService],
})
export class AppModule {}

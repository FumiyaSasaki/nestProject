import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './models/users/users.service';
import { UsersController } from './models/users/users.controller';
import { UsersModule } from './models/users/users.module';
import { ShopItemService } from './models/shop-item/shop-item.service';
import { ShopItemController } from './models/shop-item/shop-item.controller';
import { ShopItemModule } from './models/shop-item/shop-item.module';

@Module({
  imports: [UsersModule, ShopItemModule], // 追加
  controllers: [AppController, UsersController, ShopItemController],
  providers: [AppService, PrismaService, UsersService, ShopItemService],
})
export class AppModule {}

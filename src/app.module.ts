import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './models/prisma/prisma.service';
import { UsersService } from './models/users/users.service';
import { UsersController } from './models/users/users.controller';
import { UsersModule } from './models/users/users.module';
import { ShopItemService } from './models/shop-item/shop-item.service';
import { ShopItemController } from './models/shop-item/shop-item.controller';
import { ShopItemModule } from './models/shop-item/shop-item.module';
import { MenuService } from './models/menu/menu.service';
import { BlockItemService } from './models/block-item/block-item.service';
import { ProductSummaryService } from './models/product-summary/product-summary.service';
import { BlockItemController } from './models/block-item/block-item.controller';

@Module({
  imports: [UsersModule, ShopItemModule], // 追加
  controllers: [AppController, UsersController, ShopItemController, BlockItemController],
  providers: [AppService, PrismaService, UsersService, ShopItemService, MenuService, BlockItemService, ProductSummaryService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ShopItemController } from './shop-item.controller';
import { ShopItemService } from './shop-item.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [ShopItemController],
    providers: [ShopItemService, PrismaService],
})
export class ShopItemModule { }

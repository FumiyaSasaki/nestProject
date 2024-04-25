import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShopItemService } from './shop-item.service';
import { ShopItem } from '@prisma/client';
import { CreateShopItemDto } from './shop-Item.dto';

@Controller('shop-item')
export class ShopItemController {
    constructor(private readonly shopItemService: ShopItemService) { };

    //エンドポイントは上から下へ順番にマッチされる

    @Post('getallitems')
    async getAllShopItems(): Promise<ShopItem[]> {
        return this.shopItemService.getAllShopItems();
    };

    @Post('createitem')
    async createShopItem(@Body() shopItemData: CreateShopItemDto): Promise<ShopItem> {
        return this.shopItemService.createShopItem(shopItemData);
    };

    @Post(':id')
    async getShopItemById(@Param('id') id: string): Promise<ShopItem> {
        return this.shopItemService.getShopItemById(Number(id));
    };
};

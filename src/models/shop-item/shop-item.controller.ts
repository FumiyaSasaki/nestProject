import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShopItemService } from './shop-item.service';
import { ShopItem } from '@prisma/client';

@Controller('shop-item')
export class ShopItemController {
    constructor(private readonly shopItemService: ShopItemService) { }

    @Post(':id')
    async getShopItemById(@Param('id') id: string): Promise<ShopItem> {
        return this.shopItemService.getShopItemById(Number(id));
    }

    @Post('getallitems')
    async getAllShopItems(): Promise<ShopItem[]> {
        return this.shopItemService.getAllShopItems();
    }

    @Post('createitem')
    async createShopItem(
        @Body() shopItemData: { title: string; introduction: string; },
    ): Promise<ShopItem> {
        return this.shopItemService.createShopItem(shopItemData);
    }
}

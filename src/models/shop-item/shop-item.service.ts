import { Injectable } from '@nestjs/common';
import { Prisma, ShopItem } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShopItemService {
    constructor(private prisma: PrismaService) { }

    async getShopItemById(id: number): Promise<ShopItem> {
        return this.prisma.shopItem.findUnique({ where: { id } });
    }

    async getAllShopItems(): Promise<ShopItem[]> {
        return this.prisma.shopItem.findMany();
    }

    async createShopItem(data: Prisma.ShopItemCreateInput): Promise<ShopItem> {
        return this.prisma.shopItem.create({ data });
    }
}

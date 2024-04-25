import { Injectable } from '@nestjs/common';
import { BlockItem, Prisma } from '@prisma/client';
import { PrismaService } from 'src/models/prisma/prisma.service';

@Injectable()
export class BlockItemService {
    constructor(private prisma: PrismaService) { }

    async getBlockItemByUid(uid: string): Promise<BlockItem> {
        return this.prisma.blockItem.findUnique({ where: { uid } });
    };

    async getBlockItemById(id: number): Promise<BlockItem> {
        return this.prisma.blockItem.findUnique({ where: { id } });
    };

    async getBlockItemByUids(uidJoined: string): Promise<BlockItem[]> {
        const uids: string[] = uidJoined.split(',');
        return this.prisma.blockItem.findMany({ where: { uid: { in: uids } } });
    };

    async createBlockItem(data: Prisma.BlockItemCreateInput): Promise<BlockItem> {
        return this.prisma.blockItem.create({ data });
    }

}

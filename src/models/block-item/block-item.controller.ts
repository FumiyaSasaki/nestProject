import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlockItemService } from './block-item.service';
import { BlockItem } from '@prisma/client';
import { CreateBlockItemDto } from './block-Item.dto';

@Controller('block-item')
export class BlockItemController {
    constructor(private readonly blockItemService: BlockItemService) { };

    //エンドポイントは上から下へ順番にマッチされる

    @Post('createblockitem')
    async createBlockItem(@Body() shopItemData: CreateBlockItemDto): Promise<BlockItem> {
        return this.blockItemService.createBlockItem(shopItemData);
    };

    @Post('blockitembyuid')
    async getBlockItemByUid(@Body() data: { uid: string }): Promise<BlockItem> {
        return this.blockItemService.getBlockItemByUid(data.uid);
    };

    @Post('blockitembyuids')
    async getBlockItemByUids(@Body() data: { uidJoined: string }): Promise<BlockItem[]> {
        return this.blockItemService.getBlockItemByUids(data.uidJoined);
    };


}

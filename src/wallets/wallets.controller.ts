import { Controller, Get, Post, Body } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from '../dto/create-wallet.dto';
import { ReadWalletDto } from '../dto/read-wallet.dto';

@Controller('wallets')
export class WalletsController {
    constructor(private readonly walletsService: WalletsService) { }

    @Post()
    async create(@Body() createWalletDto: CreateWalletDto): Promise<ReadWalletDto> {
        const wallet = await this.walletsService.createWallet(createWalletDto);
        return { id: wallet.id, balance: wallet.balance };
    }

    @Get()
    async findAll(): Promise<ReadWalletDto[]> {
        const wallets = await this.walletsService.findAll();
        return wallets.map(wallet => ({ id: wallet.id, balance: wallet.balance }));
    }
}

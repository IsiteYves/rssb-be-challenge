import { Injectable } from '@nestjs/common';
import { PrismaClient, Wallet } from '@prisma/client';
import { CreateWalletDto } from '../dto/create-wallet.dto';

@Injectable()
export class WalletsService {
    constructor(private readonly prisma: PrismaClient) {}

    async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {
        return this.prisma.wallet.create({
            data: {
                customerId: createWalletDto.customerId,
            },
        });
    }

    async findAll(): Promise<Wallet[]> {
        return this.prisma.wallet.findMany();
    }
}

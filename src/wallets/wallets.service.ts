import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from '../database/entities/wallet.entity';
import { CreateWalletDto } from '../dto/create-wallet.dto';

@Injectable()
export class WalletsService {
    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
    ) { }

    async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {
        const wallet = new Wallet();
        wallet.customerId = createWalletDto.customerId;
        return await this.walletRepository.save(wallet);
    }

    async findAll(): Promise<Wallet[]> {
        return await this.walletRepository.find();
    }
}

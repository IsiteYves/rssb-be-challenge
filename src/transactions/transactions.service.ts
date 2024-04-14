import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { ReadTransactionDto } from '../dto/read-transaction.dto';
import { TransactionEntity } from '../database/entities/transaction.entity';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(TransactionEntity)
        private readonly transactionRepository: Repository<TransactionEntity>,
    ) { }

    async createTransaction(createTransactionDto: CreateTransactionDto): Promise<ReadTransactionDto> {
        const { amount, type, walletId } = createTransactionDto;

        // Create transaction entity
        const transaction = new TransactionEntity();
        transaction.wallet.id = walletId;
        transaction.amount = amount;
        transaction.type = type;

        // Save transaction to database
        const createdTransaction = await this.transactionRepository.save(transaction);

        // Convert the created transaction entity to ReadTransactionDto format
        const readTransactionDto: ReadTransactionDto = {
            id: createdTransaction.id,
            walletId: createdTransaction.wallet.id,
            amount: createdTransaction.amount,
            type: createdTransaction.type,
            createdAt: createdTransaction.createdAt,
        };

        return readTransactionDto;
    }

    async getTransactionById(id: number): Promise<ReadTransactionDto> {
        // Find transaction by ID in the database
        const transaction = await this.transactionRepository.findOneBy({ id });

        // If transaction is not found, throw NotFoundException
        if (!transaction) {
            throw new NotFoundException(`Transaction with ID ${id} not found.`);
        }

        // Convert the found transaction entity to ReadTransactionDto format
        const readTransactionDto: ReadTransactionDto = {
            id: transaction.id,
            walletId: transaction.wallet.id,
            amount: transaction.amount,
            type: transaction.type,
            createdAt: transaction.createdAt,
        };

        return readTransactionDto;
    }

}

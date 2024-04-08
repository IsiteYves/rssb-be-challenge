import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Transaction } from '@prisma/client';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { ReadTransactionDto } from '../dto/read-transaction.dto';

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaClient) {}

    async createTransaction(createTransactionDto: CreateTransactionDto): Promise<ReadTransactionDto> {
        const { amount, type, walletId } = createTransactionDto;

        // Let me create transaction in the database using Prisma
        const createdTransaction = await this.prisma.transaction.create({
            data: {
                amount,
                type,
                walletId,
            },
        });

        // Convert the created transaction entity to ReadTransactionDto format
        const readTransactionDto: ReadTransactionDto = {
            id: createdTransaction.id,
            walletId: createdTransaction.walletId,
            amount: createdTransaction.amount.toString(),
            type: createdTransaction.type,
            createdAt: createdTransaction.createdAt,
        };

        return readTransactionDto;
    }

    async getTransactionById(id: string): Promise<ReadTransactionDto> {
        // Find transaction by ID in the database using Prisma
        const transaction = await this.prisma.transaction.findUnique({
            where: {
                id,
            },
        });

        // If transaction is not found, throw NotFoundException
        if (!transaction) {
            throw new NotFoundException(`Transaction with ID ${id} not found.`);
        }

        // Convert the found transaction entity to ReadTransactionDto format
        const readTransactionDto: ReadTransactionDto = {
            id: transaction.id,
            walletId: transaction.walletId,
            amount: transaction.amount.toString(),
            type: transaction.type,
            createdAt: transaction.createdAt,
        };

        return readTransactionDto;
    }
}

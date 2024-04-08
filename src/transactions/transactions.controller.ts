import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { ReadTransactionDto } from '../dto/read-transaction.dto';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<ReadTransactionDto> {
        return this.transactionsService.createTransaction(createTransactionDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getTransaction(@Param('id') id: string): Promise<ReadTransactionDto> {
        return this.transactionsService.getTransactionById(id);
    }
}

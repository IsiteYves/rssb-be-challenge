import { IsNotEmpty, IsNumber, IsPositive, IsEnum, IsString } from 'class-validator';
import { TransactionType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TransactionType)
    type: TransactionType;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    walletId: string;
}

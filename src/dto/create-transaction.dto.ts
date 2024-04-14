import { IsNotEmpty, IsNumber, IsPositive, IsEnum } from 'class-validator';
import { TransactionType } from '../enums/transactiontype.enum';

export class CreateTransactionDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsNotEmpty()
    @IsEnum(TransactionType)
    type: TransactionType;

    @IsNotEmpty()
    @IsNumber()
    walletId: number;
}

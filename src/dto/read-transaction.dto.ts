import { TransactionType } from '../enums/transactiontype.enum';

export class ReadTransactionDto {
    id: number;
    walletId: number;
    amount: number;
    type: TransactionType;
    createdAt: Date;
}

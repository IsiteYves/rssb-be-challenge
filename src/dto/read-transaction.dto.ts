import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';

export class ReadTransactionDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    walletId: string;

    @ApiProperty()
    amount: string;
    
    @ApiProperty()
    type: TransactionType;
    
    @ApiProperty()
    createdAt: Date;
}

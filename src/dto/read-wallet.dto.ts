import { ApiProperty } from '@nestjs/swagger';

export class ReadWalletDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    balance: string;
}
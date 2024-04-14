import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Wallet } from './wallet.entity';
import { TransactionType } from '../../enums/transactiontype.enum';

@Entity('transactions')
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    amount: number;

    @Column({
        type: 'enum',
        enum: TransactionType,
        default: TransactionType.CREDIT,
    })
    type: TransactionType;

    @ManyToOne(() => Wallet, wallet => wallet.transactions)
    @JoinColumn({ name: 'wallet_id' })
    wallet: Wallet;

    @CreateDateColumn()
    createdAt: Date;
}

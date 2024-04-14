import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { Customer } from './customer.entity';

@Entity('wallets')
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    balance: number;

    @OneToMany(() => TransactionEntity, transaction => transaction.wallet)
    transactions: TransactionEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Customer, customer => customer.wallets)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { CustomersModule } from './customers/customers.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CustomersModule,
    WalletsModule,
    TransactionsModule,
    AuthModule,
  ],
})
export class AppModule { }

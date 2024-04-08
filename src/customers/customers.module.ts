import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [PrismaModule], // Let's include the PrismaModule
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}

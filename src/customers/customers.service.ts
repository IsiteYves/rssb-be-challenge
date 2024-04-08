import { Injectable } from '@nestjs/common';
import { PrismaClient, Customer } from '@prisma/client';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomersService {
    constructor(private readonly prisma: PrismaClient) {}

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.prisma.customer.create({
            data: {
                name: createCustomerDto.name,
                email: createCustomerDto.email,
            },
        });
    }

    async findAll(): Promise<Customer[]> {
        return this.prisma.customer.findMany();
    }
}
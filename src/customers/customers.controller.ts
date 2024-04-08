import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { Customer } from '@prisma/client';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customersService.create(createCustomerDto);
    }

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }
}

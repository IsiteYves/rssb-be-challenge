import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { Customer } from '../database/entities/customer.entity';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customersService.create(createCustomerDto);
    }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }
}

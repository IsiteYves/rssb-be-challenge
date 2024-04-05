import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../database/entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { }

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const customer = this.customerRepository.create(createCustomerDto);
        return this.customerRepository.save(customer);
    }

    async findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }
}

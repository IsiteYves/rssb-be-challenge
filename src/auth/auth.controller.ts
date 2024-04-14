import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: any) {
        // Your login logic goes here
        const token = await this.authService.generateToken(user);
        return { token };
    }
}
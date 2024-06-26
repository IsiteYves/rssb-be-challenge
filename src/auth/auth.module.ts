import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // JWT_SECRET from my .env file
      signOptions: { expiresIn: '1h' }, // You can adjust the expiration time as needed
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }

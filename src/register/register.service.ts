import {
  Injectable,
  ConflictException,
} from '@nestjs/common';


import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async register(dto: RegisterDto) {
    // 1. Normalize email
    const email = dto.email.trim().toLowerCase();

    // 2. Check if email already exists
    const existingUser =
      await this.prisma.users.findUnique({
        where: { email },
      });

    if (existingUser) {
      throw new ConflictException(
        'Email already registered',
      );
    }

    // 3. Hash the password
    const passwordHash = await bcrypt.hash(
      dto.password,
      12,
    );

    // 4. Save user in the actual shop.users table
    try {
      const user = await this.prisma.users.create({
        data: {
          email,
          full_name: dto.full_name.trim(),
          password_hash: passwordHash,
          phone: dto.phone ?? null,
        },
        select: {
          user_id: true,
          email: true,
          full_name: true,
          phone: true,
          is_active: true,
          created_at: true,
        },
      });

      // 5. Return a safe response
      return {
        message: 'User registered successfully',
        user: {
          ...user,
          user_id: user.user_id.toString(),
        },
      };
    } catch (error) {
      if (
        error instanceof
          Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Email already registered',
        );
      }

      throw error;
    }
  }
}
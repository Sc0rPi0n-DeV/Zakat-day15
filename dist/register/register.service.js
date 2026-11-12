var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ConflictException, } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
let RegisterService = class RegisterService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(dto) {
        const email = dto.email.trim().toLowerCase();
        const existingUser = await this.prisma.users.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new ConflictException('Email already registered');
        }
        const passwordHash = await bcrypt.hash(dto.password, 12);
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
            return {
                message: 'User registered successfully',
                user: {
                    ...user,
                    user_id: user.user_id.toString(),
                },
            };
        }
        catch (error) {
            if (error instanceof
                Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('Email already registered');
            }
            throw error;
        }
    }
};
RegisterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], RegisterService);
export { RegisterService };
//# sourceMappingURL=register.service.js.map
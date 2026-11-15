import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard.js';
import { LoginModule } from '../login/login.module.js';

@Module({
  imports: [PrismaModule,LoginModule],
  controllers: [ProductsController],
  providers: [ProductsService,JwtAuthGuard],
})
export class ProductsModule {}

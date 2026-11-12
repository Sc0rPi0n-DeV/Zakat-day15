import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProductsModule } from './products/products.module.js';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './register/register.module.js';
import { LoginModule } from './login/login.module.js';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    })
    , PrismaModule, ProductsModule, RegisterModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}

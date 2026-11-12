import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegisterService } from './register.service.js';
import { RegisterDto } from './dto/register.dto.js';



@Controller('register')
export class RegisterController {
  constructor(
    private readonly registerService: RegisterService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterDto) {
    return this.registerService.register(dto);
  }
}
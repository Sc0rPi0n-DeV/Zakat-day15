import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) {}

    @Post()
    async login(@Body() dto: LoginDto) {
        return this.loginService.login(dto);
    }

}

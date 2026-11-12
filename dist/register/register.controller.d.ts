import { RegisterService } from './register.service.js';
import { RegisterDto } from './dto/register.dto.js';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    register(dto: RegisterDto): Promise<{
        message: string;
        user: {
            user_id: string;
            created_at: Date;
            full_name: string;
            email: string;
            phone: string | null;
            is_active: boolean;
        };
    }>;
}

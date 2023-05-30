import { AuthService } from './auth.service';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCreadentailsDto: AuthCreadentailsDto): Promise<void>;
    signIn(AuthCreadentailsDto: AuthCreadentailsDto): Promise<{
        accessToken: string;
    }>;
    test(user: User): void;
}

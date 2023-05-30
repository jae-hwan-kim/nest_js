import { UserRepository } from './user.repository';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCreadentailsDto: AuthCreadentailsDto): Promise<void>;
    signIn(authCreadentailsDto: AuthCreadentailsDto): Promise<{
        accessToken: string;
    }>;
}

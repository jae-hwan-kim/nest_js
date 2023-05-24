import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCreadentailsDto: AuthCreadentailsDto,
  ): Promise<void> {
    return this.authService.signUp(authCreadentailsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) AuthCreadentailsDto: AuthCreadentailsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(AuthCreadentailsDto);
  }
}

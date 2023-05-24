import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';

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

  // 요청 안에 유저 정보(유저 객체)가 없다. UseGuards 를 활용하자.
  // @UseGuards(AuthGuard()) 부분을 넣고, 포스트맨에서 Bearer Token 을 함께 넣고 요청을 보내면 user 정보가 함께 넘겨져온다.
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('req', req);
  }
}

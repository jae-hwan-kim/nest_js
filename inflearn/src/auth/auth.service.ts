import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCreadentailsDto: AuthCreadentailsDto): Promise<void> {
    return await this.userRepository.createUser(authCreadentailsDto);
  }

  async signIn(
    authCreadentailsDto: AuthCreadentailsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCreadentailsDto;
    const user = await this.userRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      //  유저 토큰 생성 (Secret + Payload)
      const payload = { username }; // 중요한 정보는 넣지말기
      const accessToken = await this.jwtService.sign(payload); // Secret 과 Payload 를 합쳐줌

      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}

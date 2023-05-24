import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCreadentailsDto: AuthCreadentailsDto): Promise<void> {
    const { username, password } = authCreadentailsDto;

    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
      // console.log('error', error);
    }
  }
}

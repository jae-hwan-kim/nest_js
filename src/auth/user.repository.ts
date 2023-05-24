import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCreadentailsDto: AuthCreadentailsDto): Promise<void> {
    const { username, password } = authCreadentailsDto;

    const user = await this.create({ username, password });
    this.save(user);
  }
}

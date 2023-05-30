import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCreadentailsDto } from './dto/auth-credential.dto';
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    createUser(authCreadentailsDto: AuthCreadentailsDto): Promise<void>;
}

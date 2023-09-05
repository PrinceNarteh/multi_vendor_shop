import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UserDocument } from 'src/users/schema/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(userDto: CreateUserDto): Promise<UserDocument> {
    const user = await this.usersService.findOne({ email: userDto.email });
    if (user) {
      throw new ConflictException('User already exists');
    }
    return this.usersService.create(userDto);
  }

  async login(email: string, password: string): Promise<UserDocument> {
    return this.usersService.findByEmailAndPassword(email, password);
  }
}

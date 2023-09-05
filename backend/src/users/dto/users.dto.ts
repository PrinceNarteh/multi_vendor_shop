import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';
import { IsFile } from 'src/common/is-file.validation';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  // @IsNotEmpty()
  // @IsFile(
  //   { mime: ['image/jpg', 'image/png'] },
  //   { message: 'avatar is required' },
  // )
  avatar: any;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

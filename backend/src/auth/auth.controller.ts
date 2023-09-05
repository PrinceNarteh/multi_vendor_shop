import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto, LoginDto } from 'src/users/dto/users.dto';
import { AuthService } from './auth.service';
import { storageConfig } from 'src/common/multer.storage';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(FileInterceptor('avatar', { storage: storageConfig }))
  @Post('register')
  register(
    @Body() userDto: CreateUserDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const data = {
      ...userDto,
      avatar: file.filename,
    };
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() userDto: LoginDto) {
    return this.authService.login(userDto.email, userDto.password);
  }
}

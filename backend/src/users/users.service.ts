import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/common/abstract.repository';
import { IUserModel, USER_MODEL, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService extends AbstractRepository<UserDocument> {
  constructor(@InjectModel(USER_MODEL) userModel: IUserModel) {
    super(userModel);
  }
}

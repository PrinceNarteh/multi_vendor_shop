import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Document, Model } from 'mongoose';

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    type: String,
    select: false,
    required: true,
    minlength: [4, 'password must be at least 6 characters long'],
  })
  password: string;

  @Prop({
    type: String,
    required: true,
  })
  avatar: string;
}

export const USER_MODEL = User.name;
export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
export interface IUserModel extends Model<UserDocument> {
  findByEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<UserDocument>;
}

UserSchema.statics.findByEmailAndPassword = async function (
  email: string,
  password: string,
) {
  const user = await this.findOne({ email }, '+password');
  if (!user || !(await bcrypt.compare(password, user.password))) return;
  return user;
};

UserSchema.pre('save', async function (next) {
  const user = this as UserDocument;
  if (user.isModified('password')) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
  next();
});

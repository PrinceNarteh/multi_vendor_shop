import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

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
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
export const USER_MODEL = User.name;

import {
  prop,
  modelOptions,
  getModelForClass,
  DocumentType,
  pre,
} from "@typegoose/typegoose";
import bcrypt from "bcrypt";

@pre<UserSchema>("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
})
@modelOptions({ schemaOptions: { collection: "users" } })
class UserSchema {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true })
  email: string;

  @prop({ required: true })
  password: string;

  async comparePassword(
    this: DocumentType<UserSchema>,
    password: string
  ): Promise<Boolean> {
    return await bcrypt.compare(this.password, password).catch(() => false);
  }
}

const User = getModelForClass(UserSchema);

export default User;

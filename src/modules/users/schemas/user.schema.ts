import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({
    required: true,
    trim: true
  })
  name: string;

  @Prop({
    required: true,
    trim: true
  })
  lastname: string;

  @Prop({
    required: true,
  })
  birthdate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
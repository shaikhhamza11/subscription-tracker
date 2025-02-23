import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User Name is required'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, 'User Email is required'],
      unique: true,
      trim: true,
      minLength: 2,
      maxLength: 255,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'User Email is required'],
      minLength: 6,
    },
  },
  { timeStamp: true },
);

const User = mongoose.model('User', userSchema);

export default User;

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    documents: {
      type: Array,
      default: [],
    },
    university: String,
    occupation: String,
    downloads: Number,
    creditPoints: Number,
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;

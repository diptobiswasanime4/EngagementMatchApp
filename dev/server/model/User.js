import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  hashpassword: String,
  loginCount: Number,
});

const User = mongoose.model("User", UserSchema);

export default User;

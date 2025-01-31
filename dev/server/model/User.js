import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  hashpassword: String,
  phone: String,
  highestQualification: String,
  yearsOfExp: String,
  currentOrg: String,
  industry: String,
  domainOfExpertise: String,
  curTitle: String,
  locationPreference: String,
  skills: String,
  loginCount: Number,
});

const User = mongoose.model("User", UserSchema);

export default User;

import mongoose from "mongoose";

const EngagementSchema = new mongoose.Schema({
  postedBy: { type: String, default: "ANON" },
  title: String,
  engagementRole: String,
  engagementType: String,
  industry: String,
  department: String,
  educationalRequirements: String,
  requiredExperience: Number,
  skills: String,
  engagementDescription: String,
});

const Engagement = mongoose.model("Engagement", EngagementSchema);

export default Engagement;

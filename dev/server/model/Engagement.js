import mongoose, { Schema } from "mongoose";

const EngagementSchema = new mongoose.Schema({
  title: String,
});

const Engagement = mongoose.model("Engagement", EngagementSchema);

export default Engagement;

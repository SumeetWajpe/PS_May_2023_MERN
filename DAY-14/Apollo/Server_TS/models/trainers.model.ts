import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  id: Number,
  name: String,
  followers: Number,
  isCertified: Boolean,
  avatarUrl: String,
});
export const trainers = mongoose.model("trainers_graphql", TrainerSchema);

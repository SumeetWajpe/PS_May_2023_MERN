import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  rating: Number,
  likes: Number,
  imageUrl: String,
  description: String,
});
export const courses = mongoose.model("courses_graphql", CourseSchema);

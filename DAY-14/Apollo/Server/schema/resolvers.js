import { courses } from "../models/courses.model.js";
import { trainers } from "../models/trainer.model.js";
export const resolvers = {
  Query: {
    courses: () => courses,
    course: (_, { id }) => courses.find(c => c.id == id),
    trainers: () => trainers,
    trainer: (_, { id }) => trainers.find(t => t.id == id),
  },
  Course: {
    trainer: parent => trainers.find(t => t.id == parent.trainerId),
  },
};

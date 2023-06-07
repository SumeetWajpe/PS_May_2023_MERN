import { courses } from "../models/course.model.js";
import { trainers } from "../models/trainers.model.js";
import { CourseType } from "../types/course.type.js";
export const resolvers = {
  Query: {
    courses: async () => await courses.find({}),

    course: async (_, { id }: { id: number }) => await courses.findOne({ id }),
    trainers: async () => await trainers.find({}),
    trainer: async (_, { id }: { id: number }) =>
      await trainers.findOne({ id }),
  },
  Course: {
    trainer: async (parent: CourseType) =>
      await trainers.findOne({ id: parent.trainerId }),
  },
};

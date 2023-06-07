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
  Mutation: {
    deleteCourse: async (_, { id }: { id: number }) =>
      await courses.findOneAndDelete({ id }),
    addNewCourse: async (_, { newcourse }: { newcourse: CourseType }) => {
      try {
        let newCourseToBeAdded = new courses({ ...newcourse });
        await newCourseToBeAdded.save();
        return newCourseToBeAdded;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

import { gql } from "@apollo/client";

export const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($deleteCourseId: ID!) {
    deleteCourse(id: $deleteCourseId) {
      title
    }
  }
`;
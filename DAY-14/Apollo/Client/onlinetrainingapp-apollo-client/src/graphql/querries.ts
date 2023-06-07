import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
  query GetAllCoursesWithTitles {
    courses {
      title
    }
  }
`;

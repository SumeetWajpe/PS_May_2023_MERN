import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses {
      id
      title
      price
      rating
      likes
      imageUrl
      description
      trainer {
        name
      }
    }
  }
`;

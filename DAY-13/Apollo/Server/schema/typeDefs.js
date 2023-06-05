export const typeDefs = `#graphql
    type Query{
        courses:[Course] # [] denotes array
        course(id:ID!):Course
    }

    type Course{
        id:ID!  # ! is not null or required !
        title:String!
        price:Int
        rating:Int
        likes:Int
        imageUrl:String
        trainerName:String
        avatarUrl:String
        description:String
    }

`;

export const typeDefs = `#graphql
    type Query{
        courses:[Course] # [] denotes array
    }

    type Course{
        id:ID!  # ! is not null or required !
        title:String!,
        price:Int
    }

`;

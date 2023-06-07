export const typeDefs = `#graphql
    type Query{
        courses:[Course] # [] denotes array
        course(id:ID!):Course
        trainers:[Trainer]
        trainer(id:ID!):Trainer
    }

    type Course{
        id:ID!  # ! is not null or required !
        title:String!
        price:Int
        rating:Int
        likes:Int
        imageUrl:String
        description:String
        trainer:Trainer
        
    }

    type Trainer{
        id:ID!  
        name:String
        avatarUrl:String
        isCertified:Boolean
        followers:Int
    }
`;

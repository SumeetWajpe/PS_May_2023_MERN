export const resolvers = {
  Query: {
    courses: () => {
      return [
        { id: 1, title: "React", price: 4000 },
        { id: 2, title: "Redux", price: 5000 },
      ];
    },
  },
};

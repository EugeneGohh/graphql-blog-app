const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    blogsForClientSide: () => [...new Array(6)],
  }),

  Blog: () => ({
    id: () => "blog_01",
    heading: () => "Your heading here!",
    thumbnail: () => "https://source.unsplash.com/random",
    author: () => {
      return {
        name: "Eugene Goh",
        photo: "E",
      };
    },
    length: () => 1210,
    blogCount: () => 6,
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});

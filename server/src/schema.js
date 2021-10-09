const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get blogs for client side"
    blogsForClientSide: [Blog!]!
  }

  "Different blogs to show up on client side"
  type Blog {
    id: ID!
    "Blogs' heading"
    heading: String!
    "Author's name"
    author: Author!
    "Picture of the blog to preview"
    thumbnail: String
    "Blogs approximate length"
    length: Int
    "Number of blog this blog contained"
    blogCount: Int
  }

  type Author {
    id: ID!
    "Author's name"
    name: String!
    "Author's avatar picture"
    photo: String
  }
`;

module.exports = typeDefs;

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

  # This "User" type defines the queryable fields for every user in our data source.
  type User {

    name: String
    lastname: String
    phone:String
    address: String
    id: ID
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    "Here you can add or find the user information"
    user: [User]
  }
`;
const user = [
  {
    name: 'Yulany',
    lastname: 'Munevar',
    phone:'3122432394',
    address:'calle 1 73 03'
  },
  {
    name: 'Sheryl',
    lastname: 'Nicolle',
    phone:'382737483',
    address:'cra 78 73 03'
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    user: () => user,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const options = {
  listen:{port: 8080},
}
const {url} = await startStandaloneServer(server, options);

console.log(`🚀  Server ready at: ${url}`);

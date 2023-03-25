import { ApolloServer } from '@apollo/server';
import typeDefs from '../graphql/typeDefs.js';
import resolvers from '../graphql/resolvers.js';

const graphqlConfig = async (httpServer) => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })
    await server.start();
    console.log('GraphQl server started ')
    return server
  } catch (error) {
    console.log('Error starting GraphQl server ', error)
    process.exit(1)
  }

}

export default graphqlConfig;

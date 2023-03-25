import { expressMiddleware } from '@apollo/server/express4';

const routesConfig = (app, graphqlServer) => {
  app.use('/graphql', expressMiddleware(graphqlServer));

}

export default routesConfig;

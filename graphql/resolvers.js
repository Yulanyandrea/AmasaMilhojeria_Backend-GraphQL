import CustomerResolvers from './customers/customer.resolver.js';

const resolvers = {
  Query: {
    ...CustomerResolvers.Query
  },

  Mutation:{
    ...CustomerResolvers.Mutation
  }
};

export default resolvers;

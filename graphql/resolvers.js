import CustomerResolvers from './customers/customer.resolver.js';
import MilhojaResolvers from './milhojas/milhojas.resolver.js';
const resolvers = {
  Query: {
    ...CustomerResolvers.Query,
    ...MilhojaResolvers.Query
  },

  Mutation:{
    ...CustomerResolvers.Mutation,
    ...MilhojaResolvers.Mutation
  }
};

export default resolvers;

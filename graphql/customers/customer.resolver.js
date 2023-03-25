import { addCustomer,
  allCustomers,
  getCustomerById,
  getSingleCustomer} from './customer.service.js';

export const Query = {
 user: async (_,args) => {
  const customers = await allCustomers();
  return customers

 },

 singleCustomer: async (_, args) => {
  const { name, lastname } = args
  return getSingleCustomer(name, lastname)
 },

 getCustomerById: (_, args) => {
  const { id } = args;
  return getCustomerById(id)
 }
}

export const Mutation = {
  addCustomer : (_, { input }) => {
    return addCustomer(input);

  }

}

export default {
  Query,
  Mutation
}

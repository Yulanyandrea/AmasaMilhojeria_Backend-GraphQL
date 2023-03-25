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
  const user = await getSingleCustomer(args);
  return user
 },

 getCustomerById: async (_, args) => {
  const { id } = args;
  const user = await getCustomerById(id);
  return user
 }
}

export const Mutation = {
  addCustomer : async (_, { input }) => {
    const user = await addCustomer(input);
    return user;

  }

}

export default {
  Query,
  Mutation
}

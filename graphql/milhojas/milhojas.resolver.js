import { addMilhoja,getAllMilhojas,getMilhojasById} from './milhojas.service.js';

export const Query= {
  milhojas: async (_,args) => {
    const milhojas = await getAllMilhojas();
    return milhojas
  },

  getMilhojasById: async (_, args) => {
    const { id } = args;
    const milhojas = await getMilhojasById(id);
    return milhojas
   },



}

export const Mutation = {
  addMilhoja: async(_, { input }) => {
    const milhojas = await addMilhoja(input);
    return milhojas;

  }
}

export default {
  Query,
  Mutation
}

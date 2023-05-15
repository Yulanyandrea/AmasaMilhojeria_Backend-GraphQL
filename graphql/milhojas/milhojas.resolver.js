import { addMilhojaProduct,
  getAllMilhojas,
  getMilhojasById} from './milhojas.service.js';

import { uploadImage } from '../../upload/upload.services.js';

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
  addMilhoja: async(_, { input,file }) => {

    const milhojas = await addMilhojaProduct(input);
    milhojas.image  = await uploadImage(file);
    milhojas.image
    await milhojas.save();
    return milhojas;
  }
}




export default {
  Query,
  Mutation
}

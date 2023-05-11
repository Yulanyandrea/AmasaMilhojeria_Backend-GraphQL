import { addMilhoja,
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
  addMilhoja: async(_, { input,image }) => {

    const milhojas = await addMilhoja(input);
    const cloudinaryResponse = await uploadImage(image);
    milhojas.image = cloudinaryResponse.secure_url;
    await milhojas.save();
    return milhojas;
      }
    }




export default {
  Query,
  Mutation
}

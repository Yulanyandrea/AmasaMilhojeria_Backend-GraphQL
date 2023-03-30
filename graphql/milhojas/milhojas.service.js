import Milhojas from './milhojas.model.js';

export const getAllMilhojas = async () => {
  return Milhojas.find();
};

export const getMilhojasById = (id) =>{
  return Milhojas.findById(id);

}

export const addMilhoja = (input) =>{
  const { milhojaName, taste, sizeBig, sizeMedium,sizeSmall } = input;
  const milhojas = new Milhojas({
    milhojaName,
    taste,
    sizeBig,
    sizeMedium,
    sizeSmall,

  });
  return milhojas.save();

}

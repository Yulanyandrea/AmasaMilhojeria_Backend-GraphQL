import Milhojas from './milhojas.model.js';

export const getAllMilhojas = async () => {
  return Milhojas.find();
};

export const getMilhojasById = (id) =>{
  return Milhojas.findById(id);

}

export const addMilhojaProduct = (input) =>{
  const { milhojaName, taste, detail,image} = input;
  const milhojas = new Milhojas({
    milhojaName,
    taste,
    detail,
    image

  });
  return milhojas.save();

}

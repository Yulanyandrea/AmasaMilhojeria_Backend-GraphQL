import mongoose from "mongoose";

const MilhojasSchema = new mongoose.Schema({
  milhojaName:{
    type:String,
    require:true
  },
  taste:{
    type:String,
    require:true
  },
  sizeBig:{
    type:String,
  },
  sizeMedium:{
    type:String
  },
  sizeSmall:{
    type:String
  }
},{
  timestamps:true,
  versionKey: false,
})


const Milhojas = mongoose.model('Milhojas',MilhojasSchema);
export default Milhojas;


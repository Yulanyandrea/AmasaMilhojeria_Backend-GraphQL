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
    require:true
  },
  sizeMedium:{
    type:String,
    require:true
  },
  sizeSmall:{
    type:String,
    require:true
  }
},{
  timestamps:true
})


const Milhojas = mongoose.model('Milhojas',MilhojasSchema);
export default Milhojas;


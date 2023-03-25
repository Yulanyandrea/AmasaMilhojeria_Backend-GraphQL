import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name :{
    type:String,
    require: true
  },

  lastname:{
    type: String,
    require: true
  },

  phone:{
    type:String,
    require:true
  },
  address:{
    type:String,
    require:true
  },
},{
    timestamps:true
  }

)

const User = mongoose.model('User',CustomerSchema);
export default User;

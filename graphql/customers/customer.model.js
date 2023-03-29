import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
  email:{
    type:String,
    require: true
  },
  password:{
    type: String,
    required: true,
  }
},{
    timestamps:true,
    versionKey: false,
  }

)

CustomerSchema.pre('save',async function(next){
  const customer = this;
  try {
    if(!customer.isModified('password')){
      next()
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(customer.password, salt);
    customer.password = hash;
  } catch (error) {
    next(error);

  }
})

CustomerSchema.methods.comparePassword = async function(candidatePassword){
  const customer = this;
  return bcrypt.compare(candidatePassword, customer.password);
}

CustomerSchema.virtual('profile').get(function (){
  const { name,
    lastname,
    address,
    phone,
    password,
    email,
    _id
  } = this;

  return {
    name,
    lastname,
    address,
    phone,
    email,
    password,
    _id
  }
})

const User = mongoose.model('User',CustomerSchema);
export default User;

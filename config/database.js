import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGO_DB_URI;

  if(!uri){
    throw new Error("MONGO_DB_URI is not defined")
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri)
    console.info('connected to database')
  } catch (error) {
    console.fatal(error)
    process.exit(1);

  }

}

export default connectDb;

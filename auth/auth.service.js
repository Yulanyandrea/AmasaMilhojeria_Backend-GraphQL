import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

const secret = process.env.SECRECT_TOKEN;

export const validateJwt = async () => {
  try {
    const payload = await Jwt.verify(token, secret);
    return payload
  } catch (error) {
    console.log(error)
    throw new Error(error)

  }

}

export const signToken = (id) => {
  return Jwt.sign({ id }, secret,{
    expiresIn : 60*60*24,
  })
}

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);

}

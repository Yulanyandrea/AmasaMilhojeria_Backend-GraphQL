import User from './customer.model.js'

export const allCustomers =  () => {
  return User.find();
};

export const getSingleCustomer = ({ name, lastname }) =>{
  return User.findOne({
    $or:[
      { name: { $regex: `${name}`, $options: 'i' } },
      { lastname: { $regex: `${lastname}`, $options: 'i' } }
    ]
  });
};

export const getCustomerById = (id) =>{
  return User.findById(id);

}

export const addCustomer = (input) =>{
  const { name, lastname, phone, address } = input;
  const user = new User({
    name,
    lastname,
    phone,
    address
  });
  return user.save();

}

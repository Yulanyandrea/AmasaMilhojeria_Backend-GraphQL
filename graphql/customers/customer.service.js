const users = [
  {
    id:"1",
    name: 'Yulany',
    lastname: 'Munevar',
    phone:'3122432394',
    address:'calle 1 73 03'
  },
  {
    id:"2",
    name: 'Sheryl',
    lastname: 'Nicolle',
    phone:'382737483',
    address:'cra 78 73 03'
  },
];

export const allCustomers =  () => users;

export const getSingleCustomer = ({ name, lastname }) =>{
  return users.find(user =>user.name === name && user.lastname === lastname);
};

export const getCustomerById = (id) =>{
  return users.find(user => user.id === id);

}

export const addCustomer = (input) =>{
  const { name, lastname, phone, address } = input;
  const user = {
    id: (users.length + 1).toString(),
    name,
    lastname,
    phone,
    address
  }
  users.push(user);
  return user;

}

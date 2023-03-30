const typeDefs = `#graphql

  type Milhoja {
    "Milhoja official name"
    milhojaName:String!
    "Milhoja flavour"
    taste: String!
    "Milhoja cake"
    sizeBig:String!
    "Milhoja medium size"
    sizeMedium:String!
    "Milhoja small size"
    sizeSmall:String!
  }

  # This "User" type defines the queryable fields for every user in our data source.
  type User {
    "customer name"
    name: String
    "customer lastname"
    lastname: String
    "customer phone"
    phone:String
    "customer address"
    address: String
    "customer email"
    email:String
    password:String
  }

  input createCustomerInput {
    name: String!
    lastname:String!
    phone:String!
    address:String!
    email:String!
    password:String!
  }

  input createMilhojaInput{
    milhojaName:String!
    taste: String!
    sizeBig:String!
    sizeMedium:String!
    sizeSmall:String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    "Here you can add or find the user information"
    user: [User]

    "This is to see the customers by name"
    singleCustomer(name:String! lastname:String!):User

    "This is to see a customer by id"
    getCustomerById(id:ID!):User

    "Current customer with jwt token"
    me: User

    "You can find Milhojas' details"
    milhojas:[Milhoja]
  }

  type Mutation{
    "Add a new customer "
    addCustomer(input: createCustomerInput!): User!

    "Add a new Milhoja product"
    addMilhoja(input: createMilhojaInput!): Milhoja!
  }
`;

export default typeDefs;

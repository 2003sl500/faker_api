const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000

class User{
  constructor(){
    this.id = faker.datatype.uuid()
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.phone = faker.phone.phoneNumber()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
  }
}

class Company{
  constructor(){
    this.id = faker.datatype.uuid()
    this.name = faker.company.companyName()
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

app.get("/api/user/new", (req, res) => {
  const user = new User()
  res.json(user)
  
});

app.get("/api/user/company", (req, res) => {
  const user = new User()
  const company = new Company()
  res.json({
    userId: user.id,
    userName: user.firstName + " " + user.lastName,
    userPhone: user.phone,
    userEmail: user.email,
    userPassword: user.password,

    companyId: company.id,
    companyName: company.name,
    companyAddress: company.address
  });
})

app.listen(port, () =>
  console.log(`Server is locked and loaded on port 8000`)
);
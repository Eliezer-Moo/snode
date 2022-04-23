const faker = require('faker')
const { memberModel } = require('../')

module.exports = async () => {
    for (let i = 0; i < 10; i++) {
     const newMember = new memberModel({ 
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        birthDate: faker.date.past(),
     })
     await newMember.save()
    }
}
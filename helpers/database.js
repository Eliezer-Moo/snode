const mongoose = require('mongoose')

const { db } = require('../config')

const validateConnection = () => {
  return mongoose.connection.readyState;
}

const connect = async () => {
  try {
      if (!validateConnection()) {
          console.log('Connecting to database...')
         await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
      }
      console.log('Connected to database!')    
      
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect, validateConnection }

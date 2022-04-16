require('dotenv').config()

const { 
    environment: {validateEnv}
} = require('./utils')
const reqEnv = ['PORT', 'DB_CONNECTION']
validateEnv(reqEnv)
const { mongoDBHelper } = require('./helpers')

(async () => {
    await mongoDBHelper.connect();
})();
require('./server');

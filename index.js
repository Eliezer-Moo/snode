require('dotenv').config()

const { 
    environment: {validateEnv}
} = require('./utils')
const reqEnv = ['PORT', 'DB_CONNECTION']
validateEnv(reqEnv)
const { mongoDBHelper } = require('./helpers');

(async () => {
    await mongoDBHelper.connect();
    require('./server');
})();

process.on('SIGINT', () => {
    mongoDBHelper.disconnect()
    .then((connectionState) => {

    console.log('\nClosing database connection, connection state:', connectionState);
    console.log('\nClosing process...')
    process.exit(0)
    }
    )
})
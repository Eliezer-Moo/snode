module.exports = {
    // The environment variables
    validateEnv: (requireEnvs) => {
        for(const reqEnv of requireEnvs) {
            if(!process.env[reqEnv]) 
                throw new Error(`${reqEnv} is not defined`)
            
        }  
    }
}
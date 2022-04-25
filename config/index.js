module.exports = {
    port: process.env.PORT,
    db: process.env.DB_CONNECTION,
    jwtSecret: process.env.JWT_SECRET,
    saltRounds: process.env.SALT_ROUNDS,
}
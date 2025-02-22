require("dotenv").config()
require("colors")

const PORT  = process.env.PORT ? Number(process.env.PORT) : 3001

 function getDatabaseURI() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : 'postgres'
    const dbHost = process.env.DATABASE_PORT || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || 'vaccine_hub'

    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log("Vaccine Hub:" .red)
console.log("PORT:".blue, PORT)
console.log("Database URI:" .blue, getDatabaseURI())
console.log("---")

module.exports = {PORT, getDatabaseURI}

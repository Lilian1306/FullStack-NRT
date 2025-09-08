import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config()


// Creando el modelo de dirname
const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export default db